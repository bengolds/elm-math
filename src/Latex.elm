module Latex exposing (..)

import Lexer exposing (..)
import Regex exposing (..)


type LatexToken
    = Plus
    | Minus
    | Times
    | Divide
    | Number Float
    | Name String


grammar : Grammar LatexToken
grammar =
    [ Rule (plainToken Plus) (escape "+") 1
    , Rule (plainToken Minus) (escape "-") 1
    , Rule (plainToken Times) (escape "*") 1
    , Rule (plainToken Divide) (escape "/") 1
    , Rule (floatToken Number) "(?:\\d*\\.)?\\d+" 1

    -- This line crashes elm-reactor
    , Rule (stringToken Name) "a*" 1

    -- This line doesn't
    --, Rule (stringToken Name) "hello" 1
    ]
