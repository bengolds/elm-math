module Main exposing (..)

import Color
import Dict exposing (Dict)
import Element as El exposing (column, el, empty, row, text, wrappedRow)
import Element.Attributes as Attr exposing (fill, percent, px)
import Element.Events as Events
import Html exposing (Html)
import LatexParser
import List.Extra exposing (unique)
import MathModule exposing (MathModule, emptyModule, uniforms)
import MathSlider
import MathTree exposing (Expr(..))
import MathViews exposing (mathRow)
import Msg exposing (Msg(..))
import Parser exposing (Error)
import Plot.GlPlot exposing (FragmentShader, cameraMatrix, emptyShader, fragmentShader, inequality)
import Plot.Util exposing (toVec3)
import Scope exposing (Parameter, Scope)
import Styles exposing (Styles(..), stylesheet)
import UnsafeUniforms exposing (UniformParam(..))


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



--test : Element.Input.Menu
--test : Element.Input.Menu Taco Styles variation msg


type Taco
    = Taco
    | Burrito



-- MODEL


type alias Model =
    { modules : List MathModule
    , scope : Scope
    }


initialModel : Model
initialModel =
    { modules = [ emptyModule ]
    , scope = Scope.empty
    }


init : ( Model, Cmd Msg )
init =
    ( initialModel, Cmd.none )



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ModuleEdited index msg ->
            let
                newModules =
                    List.indexedMap
                        (\i mathModule ->
                            if i == index then
                                MathModule.update msg model.scope mathModule
                            else
                                mathModule
                        )
                        model.modules

                newScope =
                    Scope.addFreeVariables (getAllVariables newModules) model.scope
            in
            ( { model
                | modules = newModules
                , scope = newScope
              }
            , Cmd.none
            )

        AddModule ->
            ( { model | modules = model.modules ++ [ emptyModule ] }, Cmd.none )

        DeleteModule index ->
            ( { model | modules = List.Extra.removeAt index model.modules }, Cmd.none )

        PinVariable name ->
            ( { model | scope = Scope.pin name model.scope }
            , Cmd.none
            )

        UnpinVariable name ->
            ( { model | scope = Scope.unpin name model.scope }
            , Cmd.none
            )

        SliderChanged name val ->
            ( { model | scope = Scope.set name (Scope.Real val) model.scope }
            , Cmd.none
            )

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
                , column None [ Attr.spacing 16, Attr.width (percent 100), Attr.center ] (List.indexedMap (mathRow model.scope) model.modules)
                , addButton
                ]


addButton : El.Element Styles variation Msg
addButton =
    El.circle 32
        AddButton
        [ Events.onClick AddModule ]
        (el AddButtonIcon [ Attr.verticalCenter, Attr.center ] (El.text "+"))


header : Model -> El.Element Styles variation Msg
header model =
    wrappedRow Header [ Attr.minHeight (px 160), Attr.center, Attr.verticalCenter, Attr.spacing 8 ] <|
        if Scope.isEmpty model.scope then
            [ El.text "No variables pinned yet." ]
        else
            Scope.allVariables model.scope
                |> List.map varCard


getAllVariables : List MathModule -> List String
getAllVariables modules =
    modules
        |> List.map
            (\mathModule ->
                Result.map MathTree.getVariables mathModule.formula
                    |> Result.withDefault []
            )
        |> List.concat
        |> unique


varCard ( name, { pinned, value } ) =
    if pinned then
        el Card
            [ Attr.height (px 80)
            , Attr.width (px 240)

            --, Events.onClick
            --(UnpinVariable name)
            ]
            (el None [ Attr.verticalCenter, Attr.center ] <| MathSlider.mathSlider (SliderChanged name))
    else
        el Card
            [ Attr.height (px 80)
            , Attr.width (px 80)
            , Events.onClick
                (PinVariable name)
            ]
            (el None
                [ Attr.verticalCenter, Attr.center ]
                (El.text name)
            )
