module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (rel, href)
import Mathquill exposing (mathField, onEdit)
import LatexParser
import GreekLetters exposing (..)
import String


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
    { inputString : String }


initialModel : Model
initialModel =
    { inputString = "" }


init : ( Model, Cmd Msg )
init =
    ( initialModel, Cmd.none )



-- UPDATE


type Msg
    = QuillEdited String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        QuillEdited newString ->
            ( { model | inputString = newString }, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


view : Model -> Html Msg
view model =
    let
        autoCommands =
            [ "sum", "prod" ] ++ (greek |> List.filter isNonRoman |> names)
    in
        div []
            [ css "index.css"
            , mathField
                [ onEdit QuillEdited
                , Mathquill.autoCommands <| String.join " " autoCommands
                , Mathquill.spaceBehavesLikeTab True
                ]
            , br [] []
            , text model.inputString
            , br [] []
            , LatexParser.output model.inputString
            ]


css : String -> Html Msg
css path =
    node "link" [ rel "stylesheet", href path ] []
