module LatexParser exposing (..)

import Parser exposing (..)
import ParserUtils exposing (..)
import ParserDebugger
import Html exposing (span, div, text, Html, br, li, ul)


--import Calculator exposing (calculate)

import GreekLetters exposing (..)
import MathTree exposing (..)
import TypeAnalyzer exposing (..)


--Output


output inputString =
    case run (equation default) inputString of
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



--ConfigurableParser


type alias Options =
    { insideIntegral : Bool
    }


default : Options
default =
    { insideIntegral = False }


type alias ConfigurableParser a =
    Options -> Parser a



--Grammar


factor : ConfigurableParser Expr
factor options =
    inContext "factor" <|
        lazy <|
            \_ ->
                oneOf <|
                    [ constant options
                    , negative factor options
                    , differential options
                    , succeed Variable |= variable options
                    , parenthesized expr options
                    , functions options
                    , absolute options
                    , summations options
                    , integral options
                    , fail "a factor"
                    ]


expo : ConfigurableParser Expr
expo options =
    inContext "expo" <|
        lazy <|
            \_ ->
                let
                    suffix : Parser (Expr -> Expr)
                    suffix =
                        oneOf
                            [ succeed (Func1 "factorial") |. symbol "!"
                            , succeed (flip <| Func2 "exponent")
                                |. symbol "^"
                                |= closeArg expr options
                            ]
                in
                    succeed (flip applyl)
                        |= factor options
                        |= repeat zeroOrMore suffix


term : ConfigurableParser Expr
term options =
    inContext "term" <|
        lazy <|
            \_ ->
                oneOf
                    [ delayedCommitMap (Func2 "dot")
                        (expo options)
                        (succeed identity
                            |. command "cdot"
                            |. spaces
                            |= (term options)
                        )
                    , delayedCommitMap (Func2 "times") (expo options) (term options)
                    , (expo options)
                    , fail "a multiplicative term"
                    ]


expr : ConfigurableParser Expr
expr options =
    inContext "expr" <|
        lazy <|
            \_ ->
                chainl (term options) <|
                    oneOf
                        [ succeed (Func2 "plus") |. symbol "+"
                        , succeed (Func2 "minus") |. symbol "-"
                        ]


equation : ConfigurableParser Expr
equation options =
    inContext "equation" <|
        lazy <|
            \_ ->
                chainl (expr options) <|
                    succeed Equals
                        |. symbol "="


functions : ConfigurableParser Expr
functions options =
    let
        func1names =
            [ "sinh", "cosh", "tanh", "sin", "cos", "tan", "sec", "csc", "cot", "arcsin", "arccos", "arctan" ]

        func2names =
            [ "frac" ]
    in
        lazy <|
            \_ ->
                oneOf <|
                    List.map (\name -> func1 name options) func1names
                        ++ List.map (\name -> func2 name options) func2names
                        ++ [ logarithms options
                           , fail "a function, like \\sin, \\cos, or \\tan"
                           ]


singleArg : ConfigurableParser Expr
singleArg options =
    oneOf
        [ arg expr options
        , parenthesized expr options
        , delayedCommit spaces (term options)
        ]


logarithms : ConfigurableParser Expr
logarithms options =
    let
        ln =
            Func2 "log" (Real e)
    in
        oneOf
            [ succeed ln |. command "ln" |= singleArg options
            , succeed ln |= delayedCommit (command "log") (singleArg options)
            , succeed (Func2 "log")
                |. command "log"
                |. symbol "_"
                |= closeArg expr options
                |= singleArg options
            ]


integral : ConfigurableParser Expr
integral options =
    lazy <|
        \_ ->
            inContext "integral" <|
                succeed
                    (\from to integrand dummy ->
                        Integral dummy from to integrand
                    )
                    |. command "int"
                    |. symbol "_"
                    |= closeArg expr options
                    |. symbol "^"
                    |= closeArg expr options
                    |= oneOf
                        [ expr { options | insideIntegral = True }
                        , succeed (Real 1)
                        , fail "a valid integrand"
                        ]
                    |. keyword "d"
                    |= variable options


summations : ConfigurableParser Expr
summations options =
    lazy <|
        \_ ->
            inContext "summation" <|
                oneOf
                    [ succeed Sum |. command "sum"
                    , succeed Product |. command "prod"
                    ]
                    |. symbol "_"
                    |. symbol "{"
                    |= variable options
                    |. symbol "="
                    |= expr options
                    |. symbol "}"
                    |. symbol "^"
                    |= closeArg expr options
                    |= term options


differential : ConfigurableParser Expr
differential options =
    if options.insideIntegral then
        fail "No differentials inside integrals"
    else
        delayedCommit (keyword "d") <|
            succeed Differential
                |= oneOf
                    [ succeed identity |. symbol "^" |= closeArg expr options
                    , succeed (Real 1)
                    ]
                |= variable options


variable : ConfigurableParser String
variable options =
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
            [ identifier options
            , greekVariable
            , fail "a variable, like x or voltage"
            ]


func1 : String -> ConfigurableParser Expr
func1 name options =
    command name
        |% (inContext name <|
                succeed (Func1 name)
                    |= singleArg options
           )


func2 : String -> ConfigurableParser Expr
func2 name options =
    command name
        |% (inContext name <|
                succeed (Func2 name)
                    |= arg expr options
                    |= arg expr options
           )


absolute : ConfigurableParser Expr
absolute options =
    lazy <|
        \_ ->
            succeed (Func1 "abs")
                |. command "left|"
                |= expr options
                |. command "right|"


negative : ConfigurableParser Expr -> Options -> Parser Expr
negative parser options =
    lazy <|
        \_ ->
            succeed (Func1 "negative")
                |. symbol "-"
                |= parser options


constant : ConfigurableParser Expr
constant options =
    let
        toInt : Float -> Maybe Int
        toInt val =
            if (val |> truncate |> toFloat) == val then
                Just (truncate val)
            else
                Nothing
    in
        oneOf
            [ specialConstants options
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


specialConstants : ConfigurableParser Expr
specialConstants options =
    oneOf
        [ succeed (Real pi) |. command "pi"
        , succeed (Real e) |. symbol "e"
        , succeed (ImaginaryUnit) |. symbol "i"
        , fail "a special constant, like i, e or pi"
        ]


identifier : ConfigurableParser String
identifier options =
    if options.insideIntegral then
        keep (Exactly 1) (\char -> isLetter char && char /= 'd')
    else
        keep (Exactly 1) isLetter


parenthesized : ConfigurableParser a -> Options -> Parser a
parenthesized parser options =
    let
        modifiedOptions =
            { options | insideIntegral = False }

        leftRight : String -> String -> Parser a
        leftRight leftChar rightChar =
            succeed identity
                |. command ("left" ++ leftChar)
                |= parser modifiedOptions
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


arg : ConfigurableParser a -> Options -> Parser a
arg parser options =
    succeed identity
        |. symbol "{"
        |= parser options
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


closeArg : ConfigurableParser a -> Options -> Parser a
closeArg parser options =
    oneOf
        [ parseSubstring (Exactly 1) (parser options)
        , arg parser options
        ]


spaces : Parser ()
spaces =
    ignore zeroOrMore (\char -> char == ' ')
