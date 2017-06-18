module DisjointSet exposing (..)

import List


type alias DisjointSet comparable =
    List (Node comparable)


type Node comparable
    = Node comparable (Maybe (Node comparable))


empty : DisjointSet a
empty =
    []


contains : comparable -> DisjointSet comparable -> Bool
contains val set =
    List.any (matches val) set


matches : comparable -> Node comparable -> Bool
matches val node =
    case node of
        Node nodeVal _ ->
            val == nodeVal


add : comparable -> DisjointSet comparable -> DisjointSet comparable
add newElement disjointSet =
    if contains newElement disjointSet then
        disjointSet
    else
        (Node newElement Nothing) :: disjointSet


getVal : Node comparable -> comparable
getVal node =
    case node of
        Node val _ ->
            val


find : comparable -> DisjointSet comparable -> Maybe comparable
find val disjointSet =
    case findNode val disjointSet of
        Just node ->
            case getRootNode node disjointSet of
                Node rootVal _ ->
                    Just rootVal

        Nothing ->
            Nothing


getRootNode : Node comparable -> DisjointSet comparable -> Node comparable
getRootNode node disjointSet =
    case node of
        Node _ Nothing ->
            node

        Node _ (Just parent) ->
            getRootNode parent disjointSet


findNode : comparable -> DisjointSet comparable -> Maybe (Node comparable)
findNode val disjointSet =
    disjointSet
        |> List.filter (\node -> matches val node)
        |> List.head


union : comparable -> comparable -> DisjointSet comparable -> DisjointSet comparable
union x y disjointSet =
    let
        xRoot : Maybe (Node comparable)
        xRoot =
            findNode x disjointSet

        yRoot : Maybe (Node comparable)
        yRoot =
            findNode y disjointSet
    in
        case ( xRoot, yRoot ) of
            ( Just xNode, Just yNode ) ->
                if getVal xNode == getVal yNode then
                    disjointSet
                else
                    List.map
                        (\node ->
                            if node == xNode then
                                Node (getVal xNode) (Just yNode)
                            else
                                node
                        )
                        disjointSet

            _ ->
                disjointSet
