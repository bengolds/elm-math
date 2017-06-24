module TypeAnalyzer exposing (..)

import MathTree as Tree exposing (Expr)
import TreeView.TreeView exposing (treeView, TreeViewNode(..))
import Dict exposing (Dict)
import List
import String
import Html


-- Debug View


debugTree : Expr -> Html.Html msg
debugTree root =
    treeView asTreeNode root


asTreeNode : Expr -> TreeViewNode msg
asTreeNode node =
    let
        nodeContent =
            Html.text <| Tree.prettyPrint node

        --, Html.text <| toString (signatureHelper node)
        -- Insert the signature info here!
        prependText : String -> TreeViewNode msg -> TreeViewNode msg
        prependText text node =
            case node of
                TreeNode content children ->
                    TreeNode (Html.span [] [ Html.text text, content ]) children

        summationChildren indexName from to summand =
            [ TreeNode (Html.text <| " over " ++ indexName) []
            , asTreeNode from |> prependText "from "
            , asTreeNode to |> prependText "to "
            , asTreeNode summand |> prependText "of "
            ]
    in
        TreeNode nodeContent
            (case node of
                Tree.Func1 _ a1 ->
                    [ asTreeNode a1 ]

                Tree.Func2 _ a1 a2 ->
                    [ asTreeNode a1, asTreeNode a2 ]

                Tree.Equals a1 a2 ->
                    [ asTreeNode a1, asTreeNode a2 ]

                Tree.Sum indexName from to summand ->
                    summationChildren indexName from to summand

                Tree.Product indexName from to summand ->
                    summationChildren indexName from to summand

                Tree.Integral dummyVar from to integrand ->
                    summationChildren dummyVar from to integrand

                _ ->
                    []
            )


type Space
    = Scalar Set
    | Vector Int Set


type alias Set =
    { name : String
    , symbol : String
    , parentSpace : Maybe Space
    }


complex =
    Set "Complex" "ℂ" Nothing


imaginary =
    Set "Imaginary" "ℑ" (Just <| Scalar complex)


real =
    Set "Real" "ℝ" (Just <| Scalar complex)


rational =
    Set "Rational" "ℚ" (Just <| Scalar real)


integer =
    Set "Integer" "ℤ" (Just <| Scalar rational)


natural =
    Set "Natural" "ℕ" (Just <| Scalar integer)


isEqual : Set -> Set -> Bool
isEqual a b =
    a.name == b.name


isSuperset : Space -> Space -> Bool
isSuperset a b =
    let
        isParentSet : Set -> Set -> Bool
        isParentSet a b =
            case a.parentSpace of
                Just (Scalar set) ->
                    set == b

                _ ->
                    False
    in
        case ( a, b ) of
            ( Scalar aSet, Scalar bSet ) ->
                if isParentSet aSet bSet then
                    True
                else
                    aSet.parentSpace
                        |> Maybe.map (flip isSuperset <| Scalar bSet)
                        |> Maybe.withDefault False

            ( Vector aDim aSet, Vector bDim bSet ) ->
                if aDim /= bDim then
                    False
                else
                    isSuperset (Scalar aSet) (Scalar bSet)

            ( _, _ ) ->
                False



{--
--getSignature : Expr -> MappedSignature
--getSignature node =


type alias VariableConstraints =
    Dict String Space


type alias MappedSignature =
    { constraints : VariableConstraints
    , out : Set
    }


type alias Signature =
    { domain : List Set
    , range : Set
    }



type alias Function =
    { signatures : List Signature
    , expressionTree : Expr
    }


type alias Func1Signature =
    { arg : Set
    , out : Set
    }


type alias Func2Signature =
    { arg1 : Set
    , arg2 : Set
    , out : Set
    }


getSignatures : Expr -> List Signature
getSignatures expr =
    signatureHelper expr
        |> List.map unmapSignature


signatureHelper : Expr -> List MappedSignature
signatureHelper expr =
    case expr of
        Tree.Constant _ ->
            constantSignatures [ Reals ]

        Tree.Integer _ ->
            constantSignatures [ Integers ]

        Tree.Variable name ->
            variableSignature name

        Tree.Apply1 func arg ->
            let
                fnSignatures =
                    func1Signatures func

                argSignatures =
                    signatureHelper arg
            in
                List.concatMap
                    (\fnSignature ->
                        List.filterMap
                            (\argSignature ->
                                if argSignature.out == fnSignature.arg then
                                    Just { argSignature | out = fnSignature.out }
                                else
                                    Nothing
                            )
                            argSignatures
                    )
                    fnSignatures

        Tree.Apply2 func arg1 arg2 ->
            let
                fnSignatures =
                    func2Signatures func

                arg1Signatures =
                    signatureHelper arg1

                arg2Signatures =
                    signatureHelper arg2
            in
                productFilterMap3
                    (\fn sig1 sig2 ->
                        if sig1.out == fn.arg1 && sig2.out == fn.arg2 then
                            tryMerge [ sig1.constraints, sig2.constraints ]
                                |> Maybe.map
                                    (\mergedConstraints ->
                                        MappedSignature mergedConstraints fn.out
                                    )
                        else
                            Nothing
                    )
                    fnSignatures
                    arg1Signatures
                    arg2Signatures

        _ ->
            []


tryMerge : List VariableConstraints -> Maybe VariableConstraints
tryMerge allConstraints =
    let
        mergeConstraints : VariableConstraints -> Maybe VariableConstraints -> Maybe VariableConstraints
        mergeConstraints constraint1 constraint2 =
            Maybe.andThen
                (\c2 ->
                    Dict.merge
                        (\key set1 acc ->
                            Maybe.map (Dict.insert key set1) acc
                        )
                        (\key set1 set2 acc ->
                            if set1 == set2 then
                                Maybe.map (Dict.insert key set1) acc
                            else
                                Nothing
                        )
                        (\key set2 acc ->
                            Maybe.map (Dict.insert key set2) acc
                        )
                        constraint1
                        c2
                        (Just Dict.empty)
                )
                constraint2
    in
        List.foldl mergeConstraints (Just Dict.empty) allConstraints


productMap3 : (a -> b -> c -> d) -> List a -> List b -> List c -> List d
productMap3 fn list1 list2 list3 =
    List.concatMap
        (\el1 ->
            List.concatMap
                (\el2 ->
                    List.map
                        (\el3 ->
                            fn el1 el2 el3
                        )
                        list3
                )
                list2
        )
        list1


productFilterMap3 : (a -> b -> c -> Maybe d) -> List a -> List b -> List c -> List d
productFilterMap3 fn list1 list2 list3 =
    List.concatMap
        (\el1 ->
            List.concatMap
                (\el2 ->
                    List.filterMap
                        (\el3 ->
                            fn el1 el2 el3
                        )
                        list3
                )
                list2
        )
        list1


prettyPrint : Signature -> String
prettyPrint sig =
    let
        domain =
            case sig.domain of
                [] ->
                    "Anything"

                _ ->
                    sig.domain |> List.map setSymbol |> String.join ", "

        range =
            setSymbol sig.range
    in
        domain ++ " ⇒ " ++ range


constantSignatures : List Set -> List MappedSignature
constantSignatures sets =
    List.map (MappedSignature Dict.empty) sets


variableSignature : String -> List MappedSignature
variableSignature name =
    let
        allSets =
            [ Integers, Reals, Complexes ]

        identitySet set =
            MappedSignature (Dict.singleton name set) set
    in
        List.map identitySet allSets


unmapSignature : MappedSignature -> Signature
unmapSignature sig =
    let
        domain =
            Dict.toList sig.constraints
                |> List.sortBy Tuple.first
                |> List.map Tuple.second
    in
        Signature domain sig.out


func1Signatures : Tree.Func1 -> List Func1Signature
func1Signatures func1 =
    let
        trig =
            [ Func1Signature Integers Reals
            , Func1Signature Reals Reals
            , Func1Signature Complexes Complexes
            ]

        identity =
            [ Func1Signature Integers Integers
            , Func1Signature Reals Reals
            , Func1Signature Complexes Complexes
            ]
    in
        case func1 of
            Negative ->
                identity

            _ ->
                trig


func2Signatures : Tree.Func2 -> List Func2Signature
func2Signatures func2 =
    let
        plusMinus =
            [ Func2Signature Integers Integers Integers
            , Func2Signature Integers Reals Reals
            , Func2Signature Integers Complexes Complexes
            , Func2Signature Reals Integers Reals
            , Func2Signature Reals Reals Reals
            , Func2Signature Reals Complexes Complexes
            , Func2Signature Complexes Integers Complexes
            , Func2Signature Complexes Reals Complexes
            , Func2Signature Complexes Complexes Complexes
            ]
    in
        case func2 of
            Plus ->
                plusMinus

            Minus ->
                plusMinus

            Times ->
                plusMinus

            Divide ->
                plusMinus

            Exponent ->
                plusMinus

            Log ->
                --TODO: Expand this to include the complex log! It's multivalued
                [ Func2Signature Integers Integers Reals
                , Func2Signature Integers Reals Reals
                , Func2Signature Reals Integers Reals
                , Func2Signature Reals Reals Reals
                ]
--}
