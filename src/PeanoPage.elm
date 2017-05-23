module PeanoPage exposing (..)

import Html exposing (..)
import Svg exposing (..)
import Svg.Attributes exposing (..)
import Html.Attributes exposing (min, max, value, step)
import Html.Events exposing (onInput)
import String
import Peano exposing (generatePeanoCurve, SquareBounds, Point)


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



-- MODEL


type alias Function =
    Float -> Float


type alias Model =
    { curveDepth : Int }


initialModel : Model
initialModel =
    { curveDepth = 1 }


init : ( Model, Cmd Msg )
init =
    ( initialModel, Cmd.none )



-- UPDATE


type Msg
    = NoOp
    | CurveDepthChanged String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        CurveDepthChanged newCurveDepth ->
            ( { model | curveDepth = parseScaleString newCurveDepth }, Cmd.none )


parseScaleString : String -> Int
parseScaleString input =
    Result.withDefault 0 (String.toInt input)



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ plot (\x -> x) 800 800 model.curveDepth
        ]


plot : Function -> Int -> Int -> Int -> Html Msg
plot func plotWidth plotHeight depth =
    let
        bounds : SquareBounds
        bounds =
            SquareBounds (toFloat plotHeight) 0 (toFloat plotWidth) 0

        stringPoints : String
        stringPoints =
            generatePeanoCurve depth bounds ( Peano.Left, Peano.Bottom )
                |> pointsToSvgFormat
    in
        div []
            [ svg [ width (toString plotWidth), height (toString plotHeight) ]
                [ polyline [ fill "none", stroke "black", points stringPoints ] []
                ]
            , input
                [ type_ "range"
                , Html.Attributes.min "0"
                , Html.Attributes.max "5"
                , value (toString depth)
                , step "1"
                , onInput CurveDepthChanged
                ]
                []
            ]


pointsToSvgFormat : List Point -> String
pointsToSvgFormat points =
    let
        stringPoints =
            List.map (\{ x, y } -> (toString x) ++ "," ++ (toString y) ++ " ") points
    in
        String.concat stringPoints


generatePoints : Int -> Function -> List ( Float, Float )
generatePoints numPoints function =
    let
        xValues =
            List.map toFloat (List.range 1 numPoints)

        yValues =
            List.map function xValues
    in
        List.map2 (,) xValues yValues


scalePoints : Float -> Float -> List ( Float, Float ) -> List ( Float, Float )
scalePoints xScale yScale points =
    List.map (\( x, y ) -> ( x * xScale, y * yScale )) points
