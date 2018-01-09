module MathSlider exposing (mathSlider)

import Element exposing (..)
import Element.Attributes exposing (..)
import Element.Events exposing (on, targetValue)
import Html exposing (Html)
import Json.Decode as Json
import Json.Decode.Extra exposing (parseFloat)
import String
import Style exposing (StyleSheet, styleSheet)
import Styles exposing (Styles(..))


mathSlider : (Float -> msg) -> Element Styles variations msg
mathSlider msg =
    slider None [ width <| px 200, onInput msg, Element.Attributes.attribute "max" "10", Element.Attributes.attribute "min" "-10", step Any ] empty


slider style attrs child =
    node "input" <| el style (attrs ++ [ Element.Attributes.attribute "type" "range" ]) child


onInput : (Float -> msg) -> Attribute variation msg
onInput tagger =
    on "input" <|
        Json.map tagger <|
            Json.at [ "target", "value" ] parseFloat


type Step
    = Step Float
    | Any


step : Step -> Attribute variation msg
step val =
    Element.Attributes.attribute "step"
        (case val of
            Any ->
                "any"

            Step float ->
                toString float
        )
