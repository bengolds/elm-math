module Styles exposing (Styles(..), Variations, pxUnits, stylesheet, units)

import Color
import Element.Attributes exposing (Length, px)
import MaterialShadow
import Style exposing (style)
import Style.Border as Border
import Style.Color as Color
import Style.Font as Font


type Variations
    = Standard


type Styles
    = None
    | Background
    | Header
    | Card
    | AddButton
    | AddButtonIcon
    | DebugBox
    | FunctionName
    | FormulaField
    | Plot
    | IconButton


units : number -> number
units n =
    8 * n


pxUnits : Float -> Length
pxUnits n =
    px (8 * n)


stylesheet : Style.StyleSheet Styles variation
stylesheet =
    Style.styleSheet
        [ style None []
        , style Background
            [ Color.background (intGray 238)
            ]
        , style Header
            [ Color.text (intGray 117)
            , Font.typeface [ Font.font "Symbola" ]
            , Font.size 20
            ]
        , style Card <|
            [ Color.background Color.white
            ]
                ++ MaterialShadow.e2
        , style DebugBox
            [ Border.all 1
            ]
        , style AddButton <|
            [ Color.background Color.white
            , Style.cursor "pointer"
            , Style.focus
                [ Border.dashed
                , Style.prop "outline" "none"
                ]
            , Style.pseudo "active" MaterialShadow.e6
            ]
                ++ MaterialShadow.e2
        , style AddButtonIcon
            [ Font.size 30
            ]
        , style IconButton
            [ Color.text (intGray 117)
            , Font.size 24
            , Style.cursor "pointer"
            , Style.prop "user-select" "none"
            ]
        , style FormulaField
            [ Font.size 30 ]
        , style FunctionName
            [ Font.size 30
            ]
        , style Plot []
        ]


intGray : Int -> Color.Color
intGray val =
    Color.grayscale <| 1.0 - toFloat val / 255.0
