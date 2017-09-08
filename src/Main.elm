module Main exposing (..)

import Html exposing (Html)
import MathTree exposing (Expr(..))
import UnsafeUniforms exposing (UniformParam(..))
import Plot.GlPlot exposing (inequality, FragmentShader, emptyShader, fragmentShader, cameraMatrix)
import LatexParser
import Parser exposing (Error)
import Dict exposing (Dict)
import Plot.Util exposing (toVec3)
import Color
import List.Extra
import MathModule exposing (MathModule, emptyModule, uniforms)
import Element as El exposing (column, row, wrappedRow, text, el, empty)
import Element.Attributes as Attr exposing (px, percent, fill)
import Element.Events as Events
import Styles exposing (Styles(..), stylesheet)
import MathViews exposing (mathRow)
import Msg exposing (Msg(..))


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


initialModel : Model
initialModel =
    [ emptyModule
    ]


init : ( Model, Cmd Msg )
init =
    ( initialModel, Cmd.none )



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ModuleEdited index msg ->
            ( List.indexedMap
                (\i mathModule ->
                    if i == index then
                        MathModule.update msg mathModule
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

        Noop ->
            ( model, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


view : Model -> Html Msg
view model =
    let
        plotConfig =
            { xRange = ( -10, 10 )
            , yRange = ( 0, 100 )
            }
    in
        El.layout stylesheet <|
            El.full Background [] <|
                column None
                    [ Attr.center, Attr.width (percent 100), Attr.spacing 32 ]
                    [ header model
                    , column None [ Attr.spacing 16, Attr.width (percent 100), Attr.center ] (List.indexedMap mathRow model)
                    , addButton
                    ]


addButton : El.Element Styles variation Msg
addButton =
    El.circle 32
        AddButton
        [ Events.onClick AddModule ]
        (el AddButtonIcon [ Attr.verticalCenter, Attr.center ] (text "+"))


header : Model -> El.Element Styles variation Msg
header model =
    wrappedRow Header
        [ Attr.minHeight (px 160), Attr.center, Attr.verticalCenter ]
        [ text "No variables pinned yet." ]
