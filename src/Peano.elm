module Peano exposing (..)

import Html exposing (..)


type alias Point =
    { x : Float
    , y : Float
    }


type alias SquareBounds =
    { top : Float
    , bottom : Float
    , left : Float
    , right : Float
    }


lerpFloat : Float -> Float -> Float -> Float
lerpFloat x1 x2 t =
    x1 + (x2 - x1) * t


lerpPoint : Point -> Point -> Float -> Point
lerpPoint p1 p2 t =
    Point (lerpFloat p1.x p2.x t) (lerpFloat p1.y p2.y t)


center : SquareBounds -> Point
center bounds =
    let
        topLeft =
            Point bounds.left bounds.top

        bottomRight =
            Point bounds.right bounds.bottom
    in
        lerpPoint topLeft bottomRight 0.5


type VerticalEdge
    = Top
    | Bottom


type HorizontalEdge
    = Left
    | Right


type alias Corner =
    ( HorizontalEdge, VerticalEdge )


generatePeanoCurve : Int -> SquareBounds -> Corner -> List Point
generatePeanoCurve level bounds startCorner =
    case level of
        0 ->
            [ center bounds ]

        _ ->
            let
                --subSquares : List SquareBounds
                --subCorners : List Corner
                ( subSquares, subCorners ) =
                    List.unzip (subdivide bounds startCorner)
            in
                List.map2 (generatePeanoCurve (level - 1)) subSquares subCorners
                    |> List.concat


type Direction
    = Up
    | Down


type alias SquareGrid =
    List (List SquareBounds)


subdivide : SquareBounds -> Corner -> List ( SquareBounds, Corner )
subdivide bounds ( horizontalEdge, verticalEdge ) =
    let
        xValues : List ( Float, Float )
        xValues =
            subdivideSegment 3 bounds.left bounds.right
                |> makePairs

        yValues : List ( Float, Float )
        yValues =
            subdivideSegment 3 bounds.top bounds.bottom
                |> makePairs

        subSquares : SquareGrid
        subSquares =
            pairwiseMap
                (\( left, right ) ( top, bottom ) ->
                    SquareBounds top bottom left right
                )
                xValues
                yValues

        subVerticalEdges : List VerticalEdge
        subVerticalEdges =
            case verticalEdge of
                Top ->
                    [ Top, Bottom, Top ]

                Bottom ->
                    [ Bottom, Top, Bottom ]

        subHorizontalEdges : List HorizontalEdge
        subHorizontalEdges =
            case horizontalEdge of
                Left ->
                    [ Left, Right, Left ]

                Right ->
                    [ Right, Left, Right ]

        subCorners : List Corner
        subCorners =
            pairwiseMap (\vert horiz -> ( horiz, vert )) subVerticalEdges subHorizontalEdges
                |> List.concat
    in
        case horizontalEdge of
            Left ->
                subSquares
                    |> orderColumns subVerticalEdges
                    |> List.concat
                    |> zip subCorners
                    |> flip

            Right ->
                subSquares
                    |> List.reverse
                    |> orderColumns subVerticalEdges
                    |> List.concat
                    |> zip subCorners
                    |> flip



--BottomLeft ->
--subSquares
--|> orderColumns [ Up, Down, Up ]
--|> List.concat
--|> zip subCorners
--|> flip
--BottomRight ->
--subSquares
--|> List.reverse
--|> orderColumns [ Up, Down, Up ]
--|> List.concat
--|> zip subCorners
--|> flip


orderColumns : List VerticalEdge -> List (List a) -> List (List a)
orderColumns directions columns =
    List.map2
        (\direction column ->
            case direction of
                Bottom ->
                    List.reverse column

                Top ->
                    column
        )
        directions
        columns


pairwiseMap : (a -> b -> c) -> List a -> List b -> List (List c)
pairwiseMap func xList yList =
    List.map
        (\xElem ->
            List.map
                (\yElem -> func xElem yElem)
                yList
        )
        xList


zip a b =
    List.map2 (,) a b


flip : List ( a, b ) -> List ( b, a )
flip list =
    List.map (\( a, b ) -> ( b, a )) list


makePairs : List a -> List ( a, a )
makePairs list =
    case list of
        [] ->
            []

        [ first ] ->
            []

        first :: second :: [] ->
            ( first, second ) :: []

        first :: second :: rest ->
            ( first, second ) :: makePairs (second :: rest)


subdivideSegment : Int -> Float -> Float -> List Float
subdivideSegment subdivisions a b =
    let
        step =
            1 / (toFloat subdivisions)
    in
        List.range 0 subdivisions
            |> List.map (toFloat >> (*) step >> lerpFloat a b)
