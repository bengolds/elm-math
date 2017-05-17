--port module Mathquill exposing (editableField, subscriptions, mathquillIncoming)
--port module Mathquill exposing (..)


module Mathquill exposing (..)

import Html exposing (Html, div, text, button)
import Html.Keyed
import Html.Events exposing (on)
import Html.Attributes exposing (class, property, attribute)
import Json.Decode as Decode


onEdit : (String -> msg) -> Html.Attribute msg
onEdit msg =
    on "edit" <| Decode.map msg <| Decode.field "value" Decode.string


onEnter : msg -> Html.Attribute msg
onEnter msg =
    on "enter" <| Decode.succeed msg


type Direction
    = Right
    | Left


decodeDirection : Decode.Decoder Direction
decodeDirection =
    Decode.field "direction" Decode.int
        |> Decode.map
            (\direction ->
                if direction < 0 then
                    Left
                else
                    Right
            )


onMoveOutOf : (Direction -> msg) -> Html.Attribute msg
onMoveOutOf msg =
    on "moveOutOf" <| Decode.map msg <| decodeDirection


onSelectOutOf : (Direction -> msg) -> Html.Attribute msg
onSelectOutOf msg =
    on "selectOutOf" <| Decode.map msg <| decodeDirection


onDeleteOutOf : (Direction -> msg) -> Html.Attribute msg
onDeleteOutOf msg =
    on "deleteOutOf" <| Decode.map msg <| decodeDirection


onUpOutOf : msg -> Html.Attribute msg
onUpOutOf msg =
    on "upOutOf" <| Decode.succeed msg


onDownOutOf : msg -> Html.Attribute msg
onDownOutOf msg =
    on "downOutOf" <| Decode.succeed msg


emptyAttribute : Html.Attribute msg
emptyAttribute =
    attribute "empty-attribute-blank-ignore" ""


boolAttribute : String -> (Bool -> Html.Attribute msg)
boolAttribute attrName =
    (\value ->
        if value then
            attribute attrName ""
        else
            emptyAttribute
    )


spaceBehavesLikeTab : Bool -> Html.Attribute msg
spaceBehavesLikeTab =
    boolAttribute "space-behaves-like-tab"


restrictMismatchedBrackets : Bool -> Html.Attribute msg
restrictMismatchedBrackets =
    boolAttribute "restrict-mismatched-brackets"


sumStartsWithNEquals : Bool -> Html.Attribute msg
sumStartsWithNEquals =
    boolAttribute "sum-starts-with-n-equals"


supSubsRequireOperand : Bool -> Html.Attribute msg
supSubsRequireOperand =
    boolAttribute "sup-subs-require-operand"


autoSubscriptNumerals : Bool -> Html.Attribute msg
autoSubscriptNumerals =
    boolAttribute "auto-subscript-numerals"


type NavigationDirection
    = Up
    | Down
    | Default


leftRightIntoCmdGoes : NavigationDirection -> Html.Attribute msg
leftRightIntoCmdGoes dir =
    case dir of
        Up ->
            attribute "left-right-into-cmd-goes" "up"

        Down ->
            attribute "left-right-into-cmd-goes" "down"

        Default ->
            emptyAttribute


stringAttribute : String -> String -> Html.Attribute msg
stringAttribute name string =
    case string of
        "" ->
            emptyAttribute

        _ ->
            attribute name string


charsThatBreakOutOfSupSub : String -> Html.Attribute msg
charsThatBreakOutOfSupSub =
    stringAttribute "chars-that-break-out-of-sup-sub"


autoCommands : String -> Html.Attribute msg
autoCommands =
    stringAttribute "auto-commands"


autoOperatorNames : String -> Html.Attribute msg
autoOperatorNames =
    stringAttribute "auto-operator-names"


mathField : List (Html.Attribute msg) -> Html msg
mathField attributes =
    Html.Keyed.node "div"
        (List.append attributes [ class "elm-mq-edit" ])
        []


staticMath : List (Html.Attribute msg) -> String -> Html msg
staticMath attributes content =
    Html.Keyed.node "div"
        (List.append attributes [ class "elm-mq-static" ])
        [ ( "content", text content ) ]
