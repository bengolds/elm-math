module Plot.Plot exposing (..)

import Html exposing (Html)
import TypedSvg exposing (svg, circle)
import TypedSvg.Attributes exposing (viewBox, cx, cy, r, fill, strokeWidth, stroke)
import TypedSvg.Types exposing (px)
import Color


type alias Range =
    ( Int, Int )


type alias Config =
    { xRange : Range
    , yRange : Range
    }


basicPlot : (Float -> Float) -> Config -> Html msg
basicPlot func config =
    svg
        [ viewBox (Tuple.first config.xRange)
            (Tuple.first config.yRange)
            (Tuple.second config.xRange)
            (Tuple.first config.yRange)
        ]
        []
