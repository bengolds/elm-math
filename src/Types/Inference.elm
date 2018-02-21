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
            matchOperandsToFunc2 operand1 operand2 funcName

        --
        -- if contexts are compatible, merge contexts
        --
        _ ->
            []


makeAllPairs list1 list2 =
    List.lift2 (,) list1 list2


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
                    |> Maybe.map (\{ outputType } -> PossibleType context outputType)
            )


matchOperandsToFunc2 : Expr -> Expr -> String -> List PossibleType
matchOperandsToFunc2 operand1 operand2 funcName =
    let
        isCompatible tipe1 tipe2 funcType =
            isSubtype tipe1 funcType.input1
                && isSubtype tipe2 funcType.input2
    in
        makeAllPairs
            (getPossibleTypes operand1)
            (getPossibleTypes operand2)
            |> removeIncompatiblePairs
            |> List.map mergeContexts
            |> List.filterMap (findMatchingBinaryFunctionType funcName)


mergeContexts : ( PossibleType, PossibleType ) -> ( BaseType, BaseType, Context )
mergeContexts ( possibleType1, possibleType2 ) =
    ( possibleType1.tipe
    , possibleType2.tipe
    , Dict.union possibleType1.context possibleType2.context
    )


removeIncompatiblePairs : List ( PossibleType, PossibleType ) -> List ( PossibleType, PossibleType )
removeIncompatiblePairs possiblePairs =
    List.filter
        (\( possibleType1, possibleType2 ) ->
            areContextsCompatible
                possibleType1.context
                possibleType2.context
        )
        possiblePairs


findMatchingBinaryFunctionType : String -> ( BaseType, BaseType, Context ) -> Maybe PossibleType
findMatchingBinaryFunctionType funcName ( tipe1, tipe2, context ) =
    BinaryFunction.findMatchingType
        tipe1
        tipe2
        funcName
        |> Maybe.map (\{ output } -> PossibleType context output)


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
