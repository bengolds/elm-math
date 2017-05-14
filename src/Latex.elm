module Latex exposing (..)

import Lexer exposing (..)
import Regex exposing (..)


type LatexToken
    = Plus
    | Minus
    | Times
    | Divide
    | Number Float
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
    , Rule (floatToken Number) "(?:\\d*\\.)?\\d+" 1
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
