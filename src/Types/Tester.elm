module Types.Tester exposing (..)

import Dict
import Element exposing (..)
import Element.Attributes exposing (..)
import Html exposing (Html)
import LatexParser exposing (parse)
import MathTree exposing (Expr)
import Mathquill.StyleElements as Mathquill
import Styles exposing (..)
import Types.Inference exposing (PossibleType, getPossibleTypes)
import Types.BaseType exposing (BaseType(..))


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
    { formula : Expr }


initialModel : Model
initialModel =
    { formula = MathTree.Func1 "cos" (MathTree.Variable "x") }


init : ( Model, Cmd Msg )
init =
    ( initialModel, Cmd.none )


type Msg
    = FormulaChanged String
    | Noop



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
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

        Noop ->
            ( model, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


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
                , typesZone model
                ]


equationZone : Element Styles Variations Msg
equationZone =
    el Card
        [ width fill, maxWidth (pxUnits 60), height (pxUnits 10), padding (units 2) ]
    <|
        row None
            [ height fill, verticalCenter ]
            [ Mathquill.staticMath None [] "f="
            , Mathquill.mathField None [ Mathquill.onEdit FormulaChanged ]
            ]


typesZone : Model -> Element Styles Variations Msg
typesZone model =
    el Card
        --[ width fill, maxWidth (pxUnits 60), padding (units 2) ]
        [ width fill, maxWidth (pxUnits 600), padding (units 2) ]
    <|
        column None
            []
            (functionSignature model.formula
                :: List.map renderPossibleType (getPossibleTypes model.formula)
            )


functionSignature : Expr -> Element Styles Variations Msg
functionSignature formula =
    let
        variables =
            MathTree.getVariables formula
    in
        el MathText
            []
            (text <| "f(" ++ String.join "," variables ++ ")=")


renderPossibleType : PossibleType -> Element Styles Variations Msg
renderPossibleType { context, tipe } =
    el MathText
        []
        (Dict.values context
            |> flip (++) [ tipe ]
            |> List.map getSetSymbol
            |> String.join "→"
            |> text
        )


getSetSymbol : BaseType -> String
getSetSymbol tipe =
    case tipe of
        Integer ->
            "ℤ"

        Real ->
            "ℝ"

        Complex ->
            "ℂ"
