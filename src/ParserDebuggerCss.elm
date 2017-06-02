module ParserDebuggerCss exposing (css, CssClasses(..), CssIds(..), parserDebuggerNamespace)

import Css exposing (..)
import Css.Elements exposing (li, ul, span)
import Css.Namespace exposing (namespace)
import Css.Colors exposing (..)
import Html.CssHelpers exposing (withNamespace)


type CssClasses
    = ContextStack
    | ErrorDebugger
    | DebuggerHeader
    | ErrorArrow
    | ErrorChar
    | OneOfList
    | ContextTooltip


type CssIds
    = None


thisNamespace =
    "parserDebugger"


parserDebuggerNamespace =
    withNamespace thisNamespace


css =
    (stylesheet << namespace thisNamespace)
        [ class DebuggerHeader
            [ color maroon
            ]
        , class ContextStack
            [ padding2 (em 1.2) (px 8)
            , descendants
                [ span
                    [ position relative
                    , whiteSpace noWrap
                    , children
                        [ class ContextTooltip
                            [ display none
                            , position absolute
                            ]
                        ]
                    , hover
                        [ children
                            [ class ContextTooltip
                                [ display block
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        , class ErrorDebugger
            [ children
                [ everything [ margin2 zero zero ]
                ]
            ]
        , class ErrorArrow
            [ position absolute
            , top (pct 0)
            , left (pct 50)
            , transform <| translate2 (pct -50) (pct -100)
            , color red
            ]
        , class ErrorChar
            [ fontWeight bold
            , textDecoration underline
            ]
        , class OneOfList
            [ listStyle circle ]
        ]
