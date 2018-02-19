module TypeInference exposing (..)

import Dict exposing (Dict)
import List.Extra as List exposing (andThen)
import MathTree exposing (Expr)


type Type
    = Integer
    | Real
    | Complex


type alias PossibleType =
    { context : Context
    , tipe : Type
    }


type alias Function1Type =
    { inputType : Type
    , outputType : Type
    }


type alias Function2Type =
    { input1 : Type
    , input2 : Type
    , output : Type
    }


type alias Context =
    Dict String Type


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
            matchOperandToFunc1 operand funcName

        MathTree.Func2 funcName op1 op2 ->
            let
                isCompatible tipe1 tipe2 funcType =
                    isSubtype tipe1 funcType.input1
                        && isSubtype tipe2 funcType.input2

                functionTypes =
                    getFunc2Types funcName
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
                (getPossibleTypes op1)
                (getPossibleTypes op2)
                |> List.filterMap identity

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
        |> sortFunction2s
        |> List.head


mapOverAllPairs =
    List.lift2


contextFreeType : Type -> PossibleType
contextFreeType tipe =
    { context = Dict.empty
    , tipe = tipe
    }


matchOperandToFunc1 : Expr -> String -> List PossibleType
matchOperandToFunc1 operand funcName =
    getPossibleTypes operand
        |> List.filterMap
            (\{ context, tipe } ->
                findMatchingFunc1Type tipe funcName
                    |> Maybe.map .outputType
                    |> Maybe.map (PossibleType context)
            )


findMatchingFunc1Type : Type -> String -> Maybe Function1Type
findMatchingFunc1Type operandType funcName =
    getFunc1Types funcName
        |> List.filter (\{ inputType } -> isSubtype operandType inputType)
        |> List.head


typeLevel : Type -> Int
typeLevel tipe =
    case tipe of
        Integer ->
            0

        Real ->
            1

        Complex ->
            2


isSubtype : Type -> Type -> Bool
isSubtype child parent =
    if child == parent then
        True
    else
        case getParentType child of
            Just upcast ->
                isSubtype upcast parent

            Nothing ->
                False


getParentType : Type -> Maybe Type
getParentType child =
    case child of
        Integer ->
            Just Real

        Real ->
            Just Complex

        _ ->
            Nothing


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


getFunc1Types : String -> List Function1Type
getFunc1Types funcName =
    case funcName of
        "cos" ->
            [ Function1Type Real Real, Function1Type Complex Complex ]

        _ ->
            []
                |> sortFunction1s


getFunc2Types : String -> List Function2Type
getFunc2Types funcName =
    let
        arithmeticTypes =
            [ Function2Type Integer Integer Integer
            , Function2Type Real Real Real
            , Function2Type Complex Complex Complex
            ]
    in
    case funcName of
        "plus" ->
            arithmeticTypes

        "minus" ->
            arithmeticTypes

        "dot" ->
            arithmeticTypes

        "times" ->
            arithmeticTypes

        "exponent" ->
            arithmeticTypes

        "frac" ->
            [ Function2Type Integer Integer Real
            , Function2Type Real Real Real
            , Function2Type Complex Complex Complex
            ]

        _ ->
            []
                |> sortFunction2s


sortFunction1s function1s =
    List.sortBy (\{ inputType } -> typeLevel inputType) function1s


sortFunction2s function2s =
    List.sortBy
        (\{ input1, input2 } ->
            [ typeLevel input1, typeLevel input2 ]
        )
        function2s
