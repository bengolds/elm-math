module LatexParser exposing (..)

import LatexParserCss exposing (..)
import Parser exposing (..)
import ParserUtils exposing (..)
import ParserDebugger
import Html exposing (span, div, text, Html, br, li, ul)


--Output


{ id, class, classList } =
    latexParserNamespace


output inputString =
    case run expr inputString of
        Ok expr ->
            div [ class [ Tree ] ]
                [ ul [] [ asDiv expr ]
                ]

        Err err ->
            ParserDebugger.prettyPrintError err


asDiv : Expr -> Html msg
asDiv expr =
    case expr of
        Negative a1 ->
            nodeDiv "Negative" [ a1 ]

        Times a1 a2 ->
            nodeDiv "Times" [ a1, a2 ]

        Divide a1 a2 ->
            nodeDiv "Divide" [ a1, a2 ]

        Plus a1 a2 ->
            nodeDiv "Plus" [ a1, a2 ]

        Minus a1 a2 ->
            nodeDiv "Minus" [ a1, a2 ]

        Sin a1 ->
            nodeDiv "Sin" [ a1 ]

        Function name args ->
            nodeDiv ("Function " ++ name) args

        elsewise ->
            li [] [ text (toString elsewise) ]


nodeDiv title children =
    li []
        [ text title
        , ul [] (List.map asDiv children)
        ]



--Grammar


type Expr
    = Constant Float
    | Variable String
    | Function String (List Expr)
    | Sin Expr
    | Cos Expr
    | Tan Expr
    | Negative Expr
    | Plus Expr Expr
    | Minus Expr Expr
    | Times Expr Expr
    | Divide Expr Expr


factor : Parser Expr
factor =
    inContext "factor" <|
        lazy <|
            \_ ->
                oneOf <|
                    [ succeed Constant |= float
                    , negative (keyword "dogs" |% succeed (Constant 3))
                    , variable
                    , parenthesized expr
                    , functions
                    , fail "a factor"
                    ]


term : Parser Expr
term =
    inContext "term" <|
        lazy <|
            \_ ->
                chainr factor <|
                    oneOf
                        [ succeed Times |. command "cdot" |. spaces
                        , succeed Divide |. symbol "/"
                        ]


expr : Parser Expr
expr =
    inContext "expr" <|
        lazy <|
            \_ ->
                chainl term <|
                    oneOf
                        [ succeed Plus |. symbol "+"
                        , succeed Minus |. symbol "-"
                        ]


functions : Parser Expr
functions =
    lazy <|
        \_ ->
            oneOf
                [ func1 Sin "sin"
                , func1 Cos "cos"
                , func1 Tan "tan"
                , func2 Divide "frac"
                , fail "a function, like \\sin, \\cos, or \\tan"
                ]


variable : Parser Expr
variable =
    oneOf
        [ succeed Variable |= identifier
        , fail "a variable, like x or voltage"
        ]


func1 : (Expr -> b) -> String -> Parser b
func1 fn name =
    command name
        |% (inContext name <|
                succeed fn
                    |= oneOf
                        [ arg expr
                        , parenthesized expr
                        , delayedCommit spaces term
                        ]
           )


func2 : (Expr -> Expr -> c) -> String -> Parser c
func2 fn name =
    command name
        |% (inContext name <|
                succeed fn
                    |= arg expr
                    |= arg expr
           )


negative : Parser Expr -> Parser Expr
negative parser =
    lazy <|
        \_ ->
            succeed Negative
                |. symbol "-"
                |= parser


identifier : Parser String
identifier =
    keep oneOrMore isLetter


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


spaces : Parser ()
spaces =
    ignore zeroOrMore (\char -> char == ' ')
