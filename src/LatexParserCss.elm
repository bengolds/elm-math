module Main exposing (..)

import Css exposing (..)
import Css.Elements exposing (li, ul, span)
import Css.Namespace exposing (namespace)
import Css.Colors exposing (..)
import Html.CssHelpers exposing (withNamespace)


type CssClasses
    = Tree


thisNamespace =
    "treeView"


latexParserNamespace =
    withNamespace thisNamespace


apply : List (a -> b) -> a -> List b
apply fns value =
    List.map (\fn -> fn value) fns


css =
    (stylesheet << namespace thisNamespace) <|
        []
            ++ [ class Tree
                    [ position relative
                    , descendants <|
                        [ ul
                            [ listStyle none
                            , paddingLeft (px 32)
                            , children [ li [ lastChild [ after [ height (px 8) ] ] ] ]
                            ]
                        , li <|
                            [ before
                                [ borderTop3 (px 1) solid black
                                , top (px 9)
                                , width (px 8)
                                , height zero
                                ]
                            , after
                                [ borderLeft3 (px 1) solid black
                                , height (pct 100)
                                , width (px 0)
                                , top (px 2)
                                ]
                            ]
                                ++ apply [ before, after ]
                                    [ property "content" "''"
                                    , position absolute
                                    , left (px -12)
                                    ]
                        ]
                            ++ apply [ ul, li ] [ position relative ]
                    ]
               ]
