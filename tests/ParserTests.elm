module ParserTests exposing (..)

import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, int, list, string)
import Test exposing (..)
import LatexParser
import MathTree exposing (..)


testParse : String -> Expr -> Test
testParse input expectedTree =
    test input <|
        \_ ->
            case LatexParser.parse input of
                Ok parsed ->
                    Expect.equal parsed expectedTree

                Err err ->
                    Expect.fail "Couldn't parse"


suite : Test
suite =
    describe "LatexParser"
        [ describe "greek letters"
            [ testParse "\\alpha" (Variable "α")
            , testParse "\\sin\\beta" (Func1 "sin" <| Variable "β")
            ]
        ]
