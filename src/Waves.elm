module Waves exposing (..)

import AnimationFrame
import Element exposing (..)
import Element.Attributes exposing (..)
import Html exposing (Html)
import LatexParser exposing (parse)
import List.Extra exposing (unique)
import MathModule exposing (MathModule, emptyModule, uniforms)
import MathSlider exposing (mathSlider)
import MathTree exposing (Expr(..))
import MathViews exposing (iconButton)
import Mathquill.StyleElements as Mathquill
import Scope exposing (Parameter, Scope)
import Set exposing (Set)
import Styles exposing (..)
import Task
import Time exposing (Time)
import WavePlot exposing (wavePlot)
import Window


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
    { formula : Expr
    , scope : Scope
    , playingVars : Set String
    , device : Device
    }


initialModel : Model
initialModel =
    { formula = Func1 "cos" (Variable "x")
    , scope = Scope.empty |> Scope.set "t" 0
    , playingVars = Set.empty
    , device = classifyDevice { width = 1024, height = 768 }
    }


init : ( Model, Cmd Msg )
init =
    ( initialModel, Task.perform Resize Window.size )


type Msg
    = Resize Window.Size
    | FormulaChanged String
    | SliderChanged String Float
    | Tick Time
    | Play String
    | Pause String
    | Noop



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Resize size ->
            ( { model | device = classifyDevice size }, Cmd.none )

        Tick dt ->
            ( { model
                | scope =
                    Set.foldl
                        (\name scopeAcc ->
                            Scope.update
                                name
                                ((+) (Time.inSeconds dt))
                                scopeAcc
                        )
                        model.scope
                        model.playingVars
              }
            , Cmd.none
            )

        Play name ->
            ( { model
                | playingVars =
                    Set.insert name model.playingVars
              }
            , Cmd.none
            )

        Pause name ->
            ( { model
                | playingVars =
                    Set.remove name model.playingVars
              }
            , Cmd.none
            )

        FormulaChanged newLatex ->
            ( { model
                | formula =
                    case parse newLatex of
                        Ok parsed ->
                            parsed

                        Err _ ->
                            model.formula
              }
            , Cmd.none
            )

        SliderChanged name val ->
            ( { model
                | scope =
                    Scope.set name val model.scope
              }
            , Cmd.none
            )

        Noop ->
            ( model, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch <|
        [ Window.resizes Resize ]
            ++ (if Set.isEmpty model.playingVars then
                    []
                else
                    [ AnimationFrame.diffs Tick ]
               )


view : Model -> Html Msg
view model =
    layout stylesheet <|
        full Background [] <|
            column None
                [ width fill
                , center
                , spacing (units 2)
                , paddingXY (units 5) (units 2)
                ]
                [ equationZone
                , plotZone model
                , varsZone model
                ]


equationZone : Element Styles Variations Msg
equationZone =
    el Card
        [ width fill, maxWidth (pxUnits 60), height (pxUnits 10), padding (units 2) ]
    <|
        row None
            [ height fill, verticalCenter ]
            [ Mathquill.staticMath None [] "f(x, t)="
            , Mathquill.mathField None [ Mathquill.onEdit FormulaChanged ]
            ]


plotZone : Model -> Element Styles Variations Msg
plotZone model =
    el Card [ width fill, height (pxUnits 40) ] <|
        html
            (wavePlot (model.device.width - units 5)
                (units 40)
                model.scope
                model.formula
            )


varsZone : Model -> Element Styles Variations Msg
varsZone model =
    let
        constants =
            MathTree.getVariables model.formula
                |> List.filter
                    (\name ->
                        name /= "x"
                    )
    in
    row None
        [ spacing (units 2) ]
        (List.map
            (\name ->
                sliderCard model.scope
                    name
                    (Set.member name model.playingVars)
            )
            constants
        )


sliderCard : Scope -> String -> Bool -> Element Styles Variations Msg
sliderCard scope name isPlaying =
    el Card
        [ width (pxUnits 30)
        , height (pxUnits 16)
        , padding (units 1)
        ]
    <|
        column
            None
            [ width fill
            , center
            , spacing (units 2)
            ]
            [ el FunctionName [] (text name)
            , mathSlider (SliderChanged name)
            , if isPlaying then
                pauseButton (Pause name)
              else
                playButton (Play name)
            ]


playButton : Msg -> Element Styles Variations Msg
playButton msg =
    iconButton "play_circle_filled" msg


pauseButton : Msg -> Element Styles Variations Msg
pauseButton msg =
    iconButton "pause_circle_filled" msg
