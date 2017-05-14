port module Mathquill exposing (..)

import Html exposing (Html, div, text)
import Latex exposing (..)


main =
    Html.program
        { init = init
        , update = update
        , view = view
        , subscriptions = subscriptions
        }


type alias Model =
    { latexString : String
    }


init : ( Model, Cmd Msg )
init =
    ( Model "", Cmd.none )



-- UPDATE


type Msg
    = InputUpdated String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        InputUpdated newString ->
            ( { model | latexString = newString }, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    mathquillEdited InputUpdated


port mathquillEdited : (String -> msg) -> Sub msg



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ div [] [ text model.latexString ]
        , div [] [ text (toString (lexLatex model.latexString)) ]
        ]
