module ParserDebuggerCss exposing (css, CssClasses(..), CssIds(..), parserDebuggerNamespace)

import Css exposing (..)
import Css.Elements exposing (..)
import Css.Namespace exposing (namespace)
import Css.Colors exposing (..)
import Html.CssHelpers exposing (withNamespace)


type CssClasses
    = ContextStack
    | ErrorDebugger
    | DebuggerHeader
    | ErrorArrow
    | ErrorChar
    | OneOfTree


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
        ]
