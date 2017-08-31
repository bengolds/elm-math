module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (rel, href)
import Mathquill exposing (mathField, onEdit)
import MathTree exposing (Expr(..))
import UnsafeUniforms exposing (UniformParam(..))
import MathSlider exposing (mathSlider)
import GreekLetters exposing (..)
import String
import Plot.GlPlot exposing (inequality, FragmentShader, emptyShader, fragmentShader)
import LatexParser
import ParserDebugger
import Parser exposing (Error)
import Dict exposing (Dict)
import Plot.Util exposing (toVec3)
import Color
import Math.Matrix4 as Mat4
import Math.Vector3 exposing (vec3)


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



-- MODEL


type alias Model =
    { formula : Result Error Expr
    , sliderVal : Float
    , compiledFragmentShader : FragmentShader
    }


initialModel : Model
initialModel =
    { formula = Ok (Real 0)
    , sliderVal = 0
    , compiledFragmentShader = emptyShader
    }


init : ( Model, Cmd Msg )
init =
    ( initialModel, Cmd.none )



-- UPDATE


type Msg
    = QuillEdited String
    | SliderChange Float


uniforms : Model -> Dict String UniformParam
uniforms model =
    Dict.fromList
        [ ( "a", FloatParam model.sliderVal )
        , ( "color", Vec3Param <| toVec3 Color.blue )
        , ( "transform"
          , Mat4Param <|
                Mat4.mul
                    (Mat4.makePerspective 60 1 0.1 100)
                    (Mat4.makeLookAt (vec3 0 0 2) (vec3 0 0 0) (vec3 0 1 0))
          )
        ]


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        QuillEdited newString ->
            let
                parsed =
                    LatexParser.parse newString

                newFragShader =
                    case parsed of
                        Ok expr ->
                            fragmentShader expr (uniforms model)

                        Err _ ->
                            model.compiledFragmentShader
            in
                ( { model
                    | formula = parsed
                    , compiledFragmentShader = newFragShader
                  }
                , Cmd.none
                )

        SliderChange newValue ->
            ( { model | sliderVal = newValue }, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


view : Model -> Html Msg
view model =
    let
        autoCommands =
            [ "sum", "prod" ] ++ (greek |> List.filter isNonRoman |> names)

        plotConfig =
            { xRange = ( -10, 10 )
            , yRange = ( 0, 100 )
            }
    in
        div []
            [ css "index.css"
            , mathField
                [ onEdit QuillEdited
                , Mathquill.autoCommands <| String.join " " autoCommands
                , Mathquill.spaceBehavesLikeTab True
                ]
            , br [] []
            , mathSlider SliderChange
            , text (toString model.sliderVal)
            , br [] []
            , plot model
            ]


plot : Model -> Html Msg
plot model =
    case model.formula of
        Ok tree ->
            div [] [ inequality model.compiledFragmentShader (uniforms model) ]

        Err err ->
            ParserDebugger.prettyPrintError err


css : String -> Html Msg
css path =
    node "link" [ rel "stylesheet", href path ] []
