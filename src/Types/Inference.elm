module Types.Inference exposing (..)

import Dict exposing (Dict)
import List.Extra as List exposing (andThen)
import MathTree exposing (Expr)
import Types.BaseType exposing (..)
import Types.UnaryFunction as UnaryFunction
import Types.BinaryFunction as BinaryFunction


type alias PossibleType =
    { context : Context
    , tipe : BaseType
    }


type alias Context =
    Dict String BaseType


getPossibleTypes : Expr -> List PossibleType
getPossibleTypes expr =
    case expr of
        MathTree.Integer _ ->
            [ contextFreeType Integer ]

        MathTree.Real _ ->
            [ contextFreeType Real ]

        MathTree.ImaginaryUnit ->
            [ contextFreeType Complex ]

        MathTree.Variable name ->
            let
                varContextOfType tipe =
                    PossibleType (Dict.singleton name tipe) tipe
            in
                [ varContextOfType Integer
                , varContextOfType Real
                , varContextOfType Complex
                ]

        MathTree.Func1 funcName operand ->
            matchOperandToUnaryFunction operand funcName

        MathTree.Func2 funcName operand1 operand2 ->
            matchOperandToFunc2 operand1 operand2 funcName

        --
        -- if contexts are compatible, merge contexts
        --
        _ ->
            []


findLowestMatchingType functionTypes tipe1 tipe2 =
    List.filter
        (\func2Type ->
            isSubtype tipe1 func2Type.input1
                && isSubtype tipe2 func2Type.input2
        )
        functionTypes
        |> BinaryFunction.sort
        |> List.head


mapOverAllPairs =
    List.lift2


contextFreeType : BaseType -> PossibleType
contextFreeType tipe =
    { context = Dict.empty
    , tipe = tipe
    }


matchOperandToUnaryFunction : Expr -> String -> List PossibleType
matchOperandToUnaryFunction operand funcName =
    getPossibleTypes operand
        |> List.filterMap
            (\{ context, tipe } ->
                UnaryFunction.findMatchingType tipe funcName
                    |> Maybe.map .outputType
                    |> Maybe.map (PossibleType context)
            )


matchOperandToFunc2 : Expr -> Expr -> String -> List PossibleType
matchOperandToFunc2 operand1 operand2 funcName =
    let
        isCompatible tipe1 tipe2 funcType =
            isSubtype tipe1 funcType.input1
                && isSubtype tipe2 funcType.input2

        functionTypes =
            BinaryFunction.getTypes funcName
    in
        mapOverAllPairs
            (\op1Signature op2Signature ->
                if areContextsCompatible op1Signature.context op2Signature.context then
                    findLowestMatchingType
                        functionTypes
                        op1Signature.tipe
                        op2Signature.tipe
                        |> Maybe.map
                            (PossibleType
                                (mergeContexts op1Signature.context op2Signature.context)
                                << .output
                            )
                else
                    Nothing
            )
            (getPossibleTypes operand1)
            (getPossibleTypes operand2)
            |> List.filterMap identity


areContextsCompatible : Context -> Context -> Bool
areContextsCompatible context1 context2 =
    Dict.foldl
        (\key value1 stillCompatible ->
            if stillCompatible then
                case Dict.get key context2 of
                    Just value2 ->
                        value1 == value2

                    Nothing ->
                        True
            else
                False
        )
        True
        context1


mergeContexts : Context -> Context -> Context
mergeContexts context1 context2 =
    Dict.union context1 context2
