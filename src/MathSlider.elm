module MathSlider exposing (mathSlider)

import Html exposing (Html)
import Element exposing (..)
import Element.Attributes exposing (..)
import Element.Events exposing (on, targetValue)
import Style exposing (StyleSheet, styleSheet)
import Json.Decode as Json
import Json.Decode.Extra exposing (parseFloat)
import String


mathSlider : (Float -> msg) -> Html msg
mathSlider msg =
    Element.layout stylesheet (element msg)


type Styles
    = None


stylesheet : StyleSheet Styles variations
stylesheet =
    styleSheet []


element : (Float -> msg) -> Element Styles variations msg
element msg =
    slider None [ width <| px 200, onInput msg, Element.Attributes.max "10", Element.Attributes.min "-10", step Any ] empty


slider style attrs child =
    node "input" <| el style (attrs ++ [ type_ "range" ]) child


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
