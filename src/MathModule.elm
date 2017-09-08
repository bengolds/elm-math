module MathModule exposing (MathModule, update, emptyModule, Msg(..), uniforms)

import Plot.GlPlot exposing (FragmentShader, fragmentShader, emptyShader, cameraMatrix)
import Plot.Util exposing (toVec3)
import MathTree exposing (Expr(..))
import Parser exposing (Error)
import LatexParser
import Dict exposing (Dict)
import UnsafeUniforms exposing (UniformParam(..))
import Color


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


update : Msg -> MathModule -> MathModule
update msg mathModule =
    case msg of
        QuillEdited newString ->
            let
                parsed =
                    LatexParser.parse newString

                newFragShader =
                    case parsed of
                        Ok expr ->
                            fragmentShader expr (uniforms mathModule)

                        Err _ ->
                            mathModule.compiledFragmentShader
            in
                { mathModule
                    | formula = parsed
                    , compiledFragmentShader = newFragShader
                    , rawText = newString
                }


uniforms : MathModule -> Dict String UniformParam
uniforms mathModule =
    Dict.fromList
        [ ( "color", Vec3Param <| toVec3 Color.blue )
        , ( "transform"
          , Mat4Param <| cameraMatrix
          )
        ]
