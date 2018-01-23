module WavePlot exposing (wavePlot)

import Html exposing (Html)
import MathTree exposing (Expr, compile)
import Plot exposing (..)
import Scope exposing (Scope)
import Svg.Attributes exposing (stroke)


wavePlot : Int -> Int -> Scope -> Expr -> Html msg
wavePlot width height scope formula =
    let
        fn =
            case compile formula of
                Just compiled ->
                    compiled

                Nothing ->
                    always 0
    in
    viewSeriesCustom
        { defaultSeriesPlotCustomizations
            | width = width
            , height = height
        }
        [ smoothArea
            (List.map
                (\x ->
                    clear x
                        (fn (Scope.set "x" x scope))
                )
            )
        ]
        (List.range 0 600
            |> List.map toFloat
            |> List.map ((*) <| 1 / 100)
        )


smoothArea : (data -> List (DataPoint msg)) -> Series data msg
smoothArea toDataPoints =
    { axis = normalAxis
    , interpolation = Monotone (Just "#28bcad") [ stroke "#28bcad" ]
    , toDataPoints = toDataPoints
    }
