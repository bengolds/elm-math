module Main exposing (..)

import Lexer exposing (..)
import Latex exposing (..)
import Html exposing (Html, div, text, input)
import Html.Events exposing (onInput)


main : Program Never Model Msg
main =
    Html.beginnerProgram
        { model = model
        , view = view
        , update = update
        }



-- MODEL


type alias Model =
    { latexString : String
    }


model : Model
model =
    Model ""



--UPDATE


type Msg
    = NewLatexString String


update : Msg -> Model -> Model
update msg model =
    case msg of
        NewLatexString newLatexString ->
            { model | latexString = newLatexString }



--VIEW


view : Model -> Html Msg
view model =
    div []
        [ input [ onInput NewLatexString ] []
        , div [] [ text (toString (lex Latex.grammar model.latexString)) ]
        ]
