module Main exposing (..)

import Html exposing (Html)
import Mathquill.StyleElements exposing (mathField, staticMath, onEdit)
import MathTree exposing (Expr(..))
import UnsafeUniforms exposing (UniformParam(..))
import GreekLetters exposing (..)
import Plot.GlPlot exposing (inequality, FragmentShader, emptyShader, fragmentShader)
import LatexParser
import ParserDebugger
import Parser exposing (Error)
import Dict exposing (Dict)
import Plot.Util exposing (toVec3)
import Color
import List.Extra
import Math.Matrix4 as Mat4
import Math.Vector3 exposing (vec3)
import Element as El exposing (column, row, wrappedRow, text, el, empty)
import Element.Attributes as Attr exposing (px, percent, fill)
import Element.Events as Events
import Style exposing (style)
import Style.Border as Border
import Style.Color as Color
import Style.Font as Font
import MaterialShadow


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
    List MathModule


type alias MathModule =
    { formula : Result Error Expr
    , rawText : String
    , compiledFragmentShader : FragmentShader
    }


initialModel : Model
initialModel =
    [ emptyModule
    ]


emptyModule : MathModule
emptyModule =
    { formula = Ok (Real 0)
    , rawText = ""
    , compiledFragmentShader = emptyShader
    }


init : ( Model, Cmd Msg )
init =
    ( initialModel, Cmd.none )



-- UPDATE


type Msg
    = ModuleEdited Int ModuleMsg
    | AddModule
    | DeleteModule Int


type ModuleMsg
    = QuillEdited String
    | SliderChange String Float


uniforms : MathModule -> Dict String UniformParam
uniforms mathModule =
    Dict.fromList
        [ ( "color", Vec3Param <| toVec3 Color.blue )
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
        ModuleEdited index msg ->
            ( List.indexedMap
                (\i mathModule ->
                    if i == index then
                        updateModule msg mathModule
                    else
                        mathModule
                )
                model
            , Cmd.none
            )

        AddModule ->
            ( model ++ [ emptyModule ], Cmd.none )

        DeleteModule index ->
            ( (List.Extra.removeAt index model), Cmd.none )


updateModule : ModuleMsg -> MathModule -> MathModule
updateModule msg mathModule =
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

        SliderChange var newValue ->
            mathModule



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
        El.layout stylesheet <|
            El.full Background [] <|
                column None
                    [ Attr.center, Attr.width (percent 100), Attr.spacing 16 ]
                    [ header model
                    , column None [ Attr.spacing 16, Attr.width (percent 100), Attr.center ] (List.indexedMap mathRow model)
                    , addButton
                    ]


type Styles
    = None
    | Background
    | Header
    | MathRow
    | AddButton
    | DebugBox
    | FunctionName
    | FormulaField


stylesheet : Style.StyleSheet Styles variation
stylesheet =
    Style.stylesheet
        [ style None []
        , style Background
            [ Color.background (intGray 238)
            ]
        , style Header
            [ Color.text (intGray 117)
            , Font.typeface [ "Symbola" ]
            , Font.size 20
            ]
        , style MathRow <|
            [ Color.background Color.white
            ]
                ++ MaterialShadow.e2
        , style DebugBox
            [ Border.all 1
            ]
        , style AddButton
            [ Border.all 2
            , Border.rounded 1000
            , Color.border Color.black
            , Color.background Color.lightBlue
            , Style.cursor "pointer"
            , Style.focus
                [ Border.dashed
                , Style.prop "outline" "none"
                ]
            , Style.hover
                [ Color.background Color.blue
                ]
            , Style.pseudo "active"
                [ Color.background Color.darkBlue
                ]
            ]
        , style FormulaField
            [ Font.size 30 ]
        , style FunctionName
            [ Font.size 30 ]
        ]


intGray val =
    Color.grayscale <| 1.0 - (toFloat val) / 255.0


addButton =
    let
        size =
            Attr.px 60
    in
        El.button <| el AddButton [ Events.onClick AddModule, Attr.width size, Attr.height size ] (text "+")


header model =
    wrappedRow Header [ Attr.minHeight (px 160), Attr.center, Attr.verticalCenter ] [ text "No variables pinned yet." ]


mathRow index mathModule =
    row MathRow
        [ Attr.height (px 192), Attr.maxWidth (px 1280), Attr.width (fill 1) ]
        [ el DebugBox [ Attr.width (fill 1) ] <|
            el None
                [ Attr.alignLeft, Attr.verticalCenter, Attr.paddingLeft 16 ]
                (row None
                    [ Attr.verticalCenter ]
                    [ staticMath FunctionName [] "f(x)="
                    , mathField FormulaField []
                    ]
                )
        , el DebugBox [ Attr.width (fill 1), Attr.maxWidth (px 480) ] (text "plot zone")
        ]
        |> El.within
            [ row None
                [ Attr.padding 8, Attr.spacing 16, Attr.alignLeft, Attr.alignTop ]
                [ el DebugBox [ Attr.width (px 24), Attr.height (px 24), Events.onClick (DeleteModule index) ] empty
                , el DebugBox [ Attr.width (px 24), Attr.height (px 24) ] empty
                ]
            ]



--div []
--[ css "index.css"
--, mathField
--[ onEdit QuillEdited
--, Mathquill.autoCommands <| String.join " " autoCommands
--, Mathquill.spaceBehavesLikeTab True
--]
--, br [] []
--, mathSlider SliderChange
--, text (toString model.sliderVal)
--, br [] []
--, plot model
--]
--plot : Model -> Html Msg
--plot model =
--case model.formula of
--Ok tree ->
--div [] [ inequality model.compiledFragmentShader (uniforms model) ]
--Err err ->
--ParserDebugger.prettyPrintError err
--css : String -> Html Msg
--css path =
--node "link" [ rel "stylesheet", href path ] []
