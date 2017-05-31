module Latex exposing (..)

import Lexer exposing (..)
import Regex exposing (..)
import Parser exposing (..)


type LatexToken
    = Plus
    | Minus
    | Times
    | Divide
    | NumberToken Float
    | Function String
    | Name String
    | OpenDelimiter String
    | CloseDelimiter String
    | Superscript
    | Subscript


grammar : Grammar LatexToken
grammar =
    [ Rule (plainToken Plus) (escape "+") 1
    , Rule (plainToken Minus) (escape "-") 1
    , Rule (plainToken Times) (escape "*") 1
    , Rule (plainToken Divide) (escape "/") 1
    , Rule (floatToken NumberToken) "(?:\\d*\\.)?\\d+" 1
    , Rule (stringToken Function 1) "\\\\([a-zA-Z]+)" 1
    , Rule (stringToken Name 0) "[a-zA-Z]+" 1
    , Rule (stringToken OpenDelimiter 0) "(\\\\left)?(\\(|\\[|\\{)" 1
    , Rule (stringToken CloseDelimiter 0) "(\\\\right)?(\\)|\\]|\\})" 1
    , Rule (plainToken Superscript) (escape "^") 1
    , Rule (plainToken Subscript) (escape "_") 1
    , Rule ignore "\\s+" 1
    ]


lexLatex =
    lex grammar


type Expr
    = Variable String
    | Number Float
    | Sin Expr
    | Cos Expr
    | Apply Operator Expr Expr
    | Parens Expr


type Operator
    = Add
    | Subtract
    | Multiply
    | DivideBy



--[Minus, Number 3, Plus, Number 4, Times, OpenParen, Number 32, CloseParen]
-- Step 1 is parse prefixes (which is functions, negative signs, parens)
-- Then set up a linked list of operands and operators, and then associate the operators
-- Step 2 is then group and reassociate operands
--parse : List LatexToken -> Expr
--parse tokens =
