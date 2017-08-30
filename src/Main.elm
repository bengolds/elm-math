module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (rel, href)
import Mathquill exposing (mathField, onEdit)
import LatexParser
import MathSlider exposing (mathSlider)
import GreekLetters exposing (..)
import String
import Plot.GlPlot exposing (inequality)
import ParserDebugger
import Dict


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
    { inputString : String
    , sliderVal : Float
    }


initialModel : Model
initialModel =
    { inputString = ""
    , sliderVal = 0
    }


init : ( Model, Cmd Msg )
init =
    ( initialModel, Cmd.none )



-- UPDATE


type Msg
    = QuillEdited String
    | SliderChange Float


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        QuillEdited newString ->
            ( { model | inputString = newString }, Cmd.none )

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
            , text model.inputString
            , br [] []
            , plot model
            ]


plot : Model -> Html Msg
plot model =
    let
        scope =
            Dict.singleton "a" model.sliderVal

        variables =
            [ "a" ]
    in
        case LatexParser.parse model.inputString of
            Ok parsed ->
                div [] [ inequality parsed variables scope ]

            Err err ->
                ParserDebugger.prettyPrintError err


css : String -> Html Msg
css path =
    node "link" [ rel "stylesheet", href path ] []
