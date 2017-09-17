module MathModule exposing (MathModule, Msg(..), emptyModule, uniforms, update)

import Color
import Dict exposing (Dict)
import LatexParser
import MathTree exposing (Expr(..))
import Parser exposing (Error)
import Plot.GlPlot exposing (FragmentShader, cameraMatrix, emptyShader, fragmentShader)
import Plot.Util exposing (toVec3)
import Scope exposing (Scope)
import UnsafeUniforms exposing (UniformParam(..))


type alias MathModule =
    { formula : Result Error Expr
    , rawText : String
    , compiledFragmentShader : FragmentShader
    }


emptyModule : MathModule
emptyModule =
    { formula = Ok (Real 0)
    , rawText = ""
    , compiledFragmentShader = emptyShader
    }


type Msg
    = QuillEdited String
    | Recompile



--update : Msg -> MathModule -> MathModule


update msg scope mathModule =
    case msg of
        QuillEdited newString ->
            let
                parsed =
                    LatexParser.parse newString

                newFragShader =
                    case parsed of
                        Ok expr ->
                            fragmentShader expr (uniforms scope mathModule)

                        Err _ ->
                            mathModule.compiledFragmentShader
            in
            { mathModule
                | formula = parsed
                , compiledFragmentShader = newFragShader
                , rawText = newString
            }

        Recompile ->
            mathModule



--uniforms : MathModule -> Dict String UniformParam


uniforms scope mathModule =
    Dict.fromList
        [ ( "color", Vec3Param <| toVec3 Color.blue )
        , ( "transform"
          , Mat4Param <| cameraMatrix
          )
        ]
        |> Dict.union (Scope.asUniforms scope)
