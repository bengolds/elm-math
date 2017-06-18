module LatexParser exposing (..)

import Parser exposing (..)
import ParserUtils exposing (..)
import ParserDebugger
import Char exposing (isDigit)
import Html exposing (span, div, text, Html, br, li, ul)


--import Calculator exposing (calculate)

import GreekLetters exposing (..)
import MathTree exposing (..)
import TypeAnalyzer exposing (..)
import TreeView.TreeView exposing (treeView, TreeViewNode(..))


--Output


output inputString =
    case run expr inputString of
        Ok parsed ->
            div []
                [ TypeAnalyzer.debugTree parsed

                --, div [] [ text <| toString <| calculate parsed ]
                --, div []
                --(getSignatures parsed
                --|> List.map TypeAnalyzer.prettyPrint
                --|> List.map (\sig -> div [] [ text sig ])
                --)
                ]

        Err err ->
            ParserDebugger.prettyPrintError err



--Grammar


factor : Parser Expr
factor =
    inContext "factor" <|
        lazy <|
            \_ ->
                oneOf <|
                    [ constant
                    , negative factor
                    , succeed Variable |= variable
                    , parenthesized expr
                    , functions
                    , absolute
                    , summations
                    , fail "a factor"
                    ]


expo : Parser Expr
expo =
    inContext "expo" <|
        lazy <|
            \_ ->
                let
                    suffix : Parser (Expr -> Expr)
                    suffix =
                        oneOf
                            [ succeed (Func1 "factorial") |. symbol "!"
                            , succeed (flip <| Func2 "exponent") |. symbol "^" |= closeArg expr
                            ]
                in
                    succeed (flip applyl)
                        |= factor
                        |= repeat zeroOrMore suffix


applyl : List (a -> a) -> a -> a
applyl fns start =
    case fns of
        [] ->
            start

        x :: xs ->
            applyl xs (x start)


applyr : List (a -> a) -> a -> a
applyr fns start =
    applyl (List.reverse fns) start


term : Parser Expr
term =
    inContext "term" <|
        lazy <|
            \_ ->
                oneOf
                    [ delayedCommitMap (Func2 "dot")
                        expo
                        (succeed identity |. command "cdot" |. spaces |= term)
                    , delayedCommitMap (Func2 "times") expo term
                    , expo
                    , fail "a multiplicative term"
                    ]


expr : Parser Expr
expr =
    inContext "expr" <|
        lazy <|
            \_ ->
                chainl term <|
                    oneOf
                        [ succeed (Func2 "plus") |. symbol "+"
                        , succeed (Func2 "minus") |. symbol "-"
                        ]


functions : Parser Expr
functions =
    let
        func1names =
            [ "sinh", "cosh", "tanh", "sin", "cos", "tan", "sec", "csc", "cot", "arcsin", "arccos", "arctan" ]

        func2names =
            [ "frac" ]
    in
        lazy <|
            \_ ->
                oneOf <|
                    List.map func1 func1names
                        ++ List.map func2 func2names
                        ++ [ logarithms
                           , fail "a function, like \\sin, \\cos, or \\tan"
                           ]


singleArg =
    oneOf
        [ arg expr
        , parenthesized expr
        , delayedCommit spaces term
        ]


logarithms : Parser Expr
logarithms =
    let
        ln =
            Func2 "log" (Real e)
    in
        oneOf
            [ succeed ln |. command "ln" |= singleArg
            , succeed ln |= delayedCommit (command "log") singleArg
            , succeed (Func2 "log")
                |. command "log"
                |. symbol "_"
                |= closeArg expr
                |= singleArg
            ]


summations : Parser Expr
summations =
    lazy <|
        \_ ->
            inContext "summation" <|
                oneOf
                    [ succeed Sum |. command "sum"
                    , succeed Product |. command "prod"
                    ]
                    |. symbol "_"
                    |. symbol "{"
                    |= variable
                    |. symbol "="
                    |= expr
                    |. symbol "}"
                    |. symbol "^"
                    |= closeArg expr
                    |= term


variable : Parser String
variable =
    let
        greekVariable : Parser String
        greekVariable =
            oneOf <|
                List.map
                    (\{ name, symbol } ->
                        succeed (toString symbol)
                            |. command name
                    )
                    (greek |> List.filter isNonRoman)
    in
        oneOf
            [ identifier
            , greekVariable
            , fail "a variable, like x or voltage"
            ]


func1 : String -> Parser Expr
func1 name =
    command name
        |% (inContext name <|
                succeed (Func1 name)
                    |= singleArg
           )


func2 : String -> Parser Expr
func2 name =
    command name
        |% (inContext name <|
                succeed (Func2 name)
                    |= arg expr
                    |= arg expr
           )


absolute : Parser Expr
absolute =
    lazy <|
        \_ ->
            succeed (Func1 "abs")
                |. command "left|"
                |= expr
                |. command "right|"


negative : Parser Expr -> Parser Expr
negative parser =
    lazy <|
        \_ ->
            succeed (Func1 "negative")
                |. symbol "-"
                |= parser


constant : Parser Expr
constant =
    let
        toInt : Float -> Maybe Int
        toInt val =
            if (val |> truncate |> toFloat) == val then
                Just (truncate val)
            else
                Nothing
    in
        oneOf
            [ specialConstants
            , float
                |> map
                    (\val ->
                        case toInt val of
                            Nothing ->
                                Rational val

                            Just int ->
                                Integer int
                    )
            ]


specialConstants : Parser Expr
specialConstants =
    oneOf
        [ succeed (Real pi) |. command "pi"
        , succeed (Real e) |. symbol "e"
        , succeed (ImaginaryUnit) |. symbol "i"
        , fail "a special constant, like i, e or pi"
        ]


identifier : Parser String
identifier =
    keep (Exactly 1) isLetter


parenthesized : Parser a -> Parser a
parenthesized parser =
    let
        leftRight : String -> String -> Parser a
        leftRight leftChar rightChar =
            succeed identity
                |. command ("left" ++ leftChar)
                |= parser
                |. command ("right" ++ rightChar)
    in
        oneOf
            [ leftRight "(" ")"
            , leftRight "\\{" "\\}"
            , leftRight "[" "]"
            , fail "a parentheses, like \\left(, \\left[, or \\left{"
            ]


command : String -> Parser ()
command name =
    keyword ("\\" ++ name)


arg : Parser a -> Parser a
arg parser =
    succeed identity
        |. symbol "{"
        |= parser
        |. symbol "}"


parseSubstring : Count -> Parser a -> Parser a
parseSubstring count parser =
    let
        instaCommitParser =
            keep count (always True)
                |> andThen
                    (\input ->
                        case run parser input of
                            Ok parsed ->
                                succeed parsed

                            Err err ->
                                fail <| "substring of " ++ (toString count) ++ " characters"
                    )

        first =
            always
    in
        delayedCommitMap first instaCommitParser (succeed ())


closeArg parser =
    oneOf
        [ parseSubstring (Exactly 1) parser
        , arg parser
        ]


spaces : Parser ()
spaces =
    ignore zeroOrMore (\char -> char == ' ')
