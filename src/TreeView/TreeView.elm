module TreeView.TreeView exposing (TreeViewNode(..), treeView)

import Html exposing (Html, ul, li, div)
import TreeView.TreeViewCss exposing (..)


{ id, class, classList } =
    treeViewNamespace


type TreeViewNode msg
    = TreeNode (Html msg) (List (TreeViewNode msg))


treeView : (a -> TreeViewNode msg) -> a -> Html msg
treeView toNode root =
    div [ class [ TreeRoot ] ]
        [ ul [] [ nodeDiv (toNode root) ]
        ]


nodeDiv : TreeViewNode msg -> Html msg
nodeDiv node =
    case node of
        TreeNode content children ->
            Html.li []
                [ content
                , Html.ul [] (List.map nodeDiv children)
                ]
