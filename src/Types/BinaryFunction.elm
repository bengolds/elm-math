module Types.BinaryFunction exposing (..)

import Types.BaseType exposing (BaseType(..), typeLevel, isSubtype)


type alias BinaryFunctionType =
    { input1 : BaseType
    , input2 : BaseType
    , output : BaseType
    }


sort : List BinaryFunctionType -> List BinaryFunctionType
sort binaryFuncs =
    List.sortBy
        (\{ input1, input2 } ->
            [ typeLevel input1, typeLevel input2 ]
        )
        binaryFuncs


getTypes : String -> List BinaryFunctionType
getTypes funcName =
    let
        arithmeticTypes =
            [ BinaryFunctionType Integer Integer Integer
            , BinaryFunctionType Real Real Real
            , BinaryFunctionType Complex Complex Complex
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
                [ BinaryFunctionType Integer Integer Real
                , BinaryFunctionType Real Real Real
                , BinaryFunctionType Complex Complex Complex
                ]

            _ ->
                []
                    |> sort


findMatchingType : BaseType -> BaseType -> String -> Maybe BinaryFunctionType
findMatchingType tipe1 tipe2 funcName =
    List.filter
        (\func2Type ->
            isSubtype tipe1 func2Type.input1
                && isSubtype tipe2 func2Type.input2
        )
        (getTypes funcName)
        |> sort
        |> List.head
