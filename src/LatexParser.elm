module LatexParser exposing (..)

import LatexParserCss exposing (..)
import Parser exposing (..)
import ParserUtils exposing (..)
import ParserDebugger
import Char exposing (isDigit)
import Html exposing (span, div, text, Html, br, li, ul)
import Calculator exposing (calculate)
import MathTree exposing (..)
import TypeAnalyzer exposing (getSignatures)


--Output


{ id, class, classList } =
    latexParserNamespace


output inputString =
    case run expr inputString of
        Ok parsed ->
            div [ class [ Tree ] ]
                [ ul [] [ asDiv parsed ]
                , div [] [ text <| toString <| calculate parsed ]
                , div []
                    (getSignatures parsed
                        |> List.map TypeAnalyzer.prettyPrint
                        |> List.map (\sig -> div [] [ text sig ])
                    )
                ]

        Err err ->
            ParserDebugger.prettyPrintError err


asDiv : Expr -> Html msg
asDiv parsedExpr =
    case parsedExpr of
        Apply1 func a1 ->
            nodeDiv (toString func) [ a1 ]

        Apply2 func a1 a2 ->
            nodeDiv (toString func) [ a1, a2 ]

        Sum indexVar fromVal toExpr a1 ->
            nodeDiv
                ("Sum over " ++ indexVar ++ " from " ++ (toString fromVal) ++ " to: " ++ (toString toExpr))
                [ a1 ]

        elsewise ->
            li [] [ text (toString elsewise) ]


nodeDiv title children =
    li []
        [ text title
        , ul [] (List.map asDiv children)
        ]



--Grammar


factor : Parser Expr
factor =
    inContext "factor" <|
        lazy <|
            \_ ->
                oneOf <|
                    [ specialConstants
                    , succeed Constant |= float
                    , negative factor
                    , variable
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
                            [ succeed (Apply1 Factorial) |. symbol "!"
                            , succeed (flip <| Apply2 Exponent) |. symbol "^" |= closeArg expr
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
                    [ delayedCommitMap (Apply2 Times)
                        expo
                        (succeed identity |. command "cdot" |. spaces |= term)
                    , delayedCommitMap (Apply2 Times) expo term
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
                        [ succeed (Apply2 Plus) |. symbol "+"
                        , succeed (Apply2 Minus) |. symbol "-"
                        ]


functions : Parser Expr
functions =
    let
        func1names =
            [ "sinh", "cosh", "tanh", "sin", "cos", "tan", "sec", "csc", "cot", "arcsin", "arccos", "arctan" ]

        func1exprs =
            [ Sinh, Cosh, Tanh, Sin, Cos, Tan, Sec, Csc, Cot, Arcsin, Arccos, Arctan ]

        func2names =
            [ "frac" ]

        func2exprs =
            [ Divide ]
    in
        lazy <|
            \_ ->
                oneOf <|
                    List.map2 func1 func1exprs func1names
                        ++ List.map2 func2 func2exprs func2names
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
            Apply2 Log (Constant e)
    in
        oneOf
            [ succeed ln |. command "ln" |= singleArg
            , succeed ln |= delayedCommit (command "log") singleArg
            , succeed (Apply2 Log)
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
                succeed Sum
                    |. command "sum"
                    |. symbol "_"
                    |. symbol "{"
                    |= identifier
                    |. symbol "="
                    |= int
                    |. symbol "}"
                    |. symbol "^"
                    |= closeArg int
                    |= term


variable : Parser Expr
variable =
    oneOf
        [ succeed Variable |= identifier
        , fail "a variable, like x or voltage"
        ]


func1 : Func1 -> String -> Parser Expr
func1 fn name =
    command name
        |% (inContext name <|
                succeed (Apply1 fn)
                    |= singleArg
           )


func2 : Func2 -> String -> Parser Expr
func2 fn name =
    command name
        |% (inContext name <|
                succeed (Apply2 fn)
                    |= arg expr
                    |= arg expr
           )


absolute : Parser Expr
absolute =
    lazy <|
        \_ ->
            succeed (Apply1 Abs)
                |. command "left|"
                |= expr
                |. command "right|"


negative : Parser Expr -> Parser Expr
negative parser =
    lazy <|
        \_ ->
            succeed (Apply1 Negative)
                |. symbol "-"
                |= parser


specialConstants : Parser Expr
specialConstants =
    oneOf
        [ succeed (Constant pi) |. command "pi"
        , succeed (Constant e) |. symbol "e"
        , fail "a special constant, like e or pi"
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
