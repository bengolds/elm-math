module MathTreeTests exposing (..)

import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, float, map, int, list, string, oneOf, char)
import Test exposing (..)
import LatexParser
import MathTree exposing (..)
import String
import List.Extra


tree : Int -> List String -> Fuzzer Expr
tree depth variables =
    if depth <= 0 then
        oneOf
            [ real, rational, integer, variable variables, imaginary ]
    else
        let
            newDepth =
                depth - 1
        in
            oneOf
                [ real
                , rational
                , integer
                , variable variables
                , imaginary
                , differential newDepth variables
                , equals newDepth variables
                , func1 newDepth variables
                , func2 newDepth variables
                ]


real : Fuzzer Expr
real =
    Fuzz.map Real float


rational : Fuzzer Expr
rational =
    Fuzz.map Rational float


integer : Fuzzer Expr
integer =
    Fuzz.map Integer int


variable : List String -> Fuzzer Expr
variable variables =
    Fuzz.map Variable <|
        Fuzz.oneOf <|
            List.map Fuzz.constant variables


differential : Int -> List String -> Fuzzer Expr
differential depth variables =
    Fuzz.map2 Differential (tree depth variables) varName


imaginary : Fuzzer Expr
imaginary =
    Fuzz.constant ImaginaryUnit


equals : Int -> List String -> Fuzzer Expr
equals depth variables =
    Fuzz.map2 Equals (tree depth variables) (tree depth variables)


func1 : Int -> List String -> Fuzzer Expr
func1 depth variables =
    Fuzz.map2 Func1 string (tree depth variables)


func2 : Int -> List String -> Fuzzer Expr
func2 depth variables =
    Fuzz.map3 Func2 string (tree depth variables) (tree depth variables)



-- TODO: writing a proper summation fuzzer will take a bit
--summations : Int -> Fuzzer Expr
--summations depth =
--Fuzz.andThen (\summationType ->
--Fuzz.map4 summationType varName


varName : Fuzzer String
varName =
    -- TODO: Write better fuzzer here; only alpha and greek
    Fuzz.map String.fromChar char


uniqueVarSet : Fuzzer (List String)
uniqueVarSet =
    Fuzz.list varName
        |> Fuzz.map List.Extra.unique
        |> Fuzz.conditional { retries = 8, fallback = \_ -> [ "a" ], condition = (List.isEmpty >> not) }


suite : Test
suite =
    describe "MathTree"
        [ describe "getVariables"
            [ test "no variables" <|
                \_ ->
                    Sum "blah" (Equals (Variable "blah") (Real 1)) (Real 1) (Variable "blah")
                        |> getVariables
                        |> Expect.equalLists []
            , test "variables should only show up once" <|
                \_ ->
                    Func2 "plus" (Variable "a") (Variable "a")
                        |> getVariables
                        |> Expect.equalLists [ "a" ]
            , test "variables sorted" <|
                \_ ->
                    Func2 "times" (Variable "b") (Variable "a")
                        |> getVariables
                        |> Expect.equalLists [ "a", "b" ]
            ]
        ]
