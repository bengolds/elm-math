module UnsafeUniformTests exposing (..)

import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, float, map, int, list, string, oneOf, char)
import Test exposing (..)
import UnsafeUniforms exposing (..)
import String


suite : Test
suite =
    describe "UnsafeUniforms"
        [ test "sanitize greek letters" <|
            \_ ->
                sanitize "αΣotherstuffΠπ"
                    |> Expect.equal "greek_alpha_greek_Sigma_otherstuffgreek_Pi_greek_pi_"
        ]
