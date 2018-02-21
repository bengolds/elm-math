module Types.UnaryFunction exposing (..)

import Types.BaseType exposing (BaseType(..), typeLevel, isSubtype)


type alias UnaryFunctionType =
    { inputType : BaseType
    , outputType : BaseType
    }


sort : List UnaryFunctionType -> List UnaryFunctionType
sort unaryFuncs =
    List.sortBy (\{ inputType } -> typeLevel inputType) unaryFuncs


getTypes : String -> List UnaryFunctionType
getTypes funcName =
    case funcName of
        "cos" ->
            [ UnaryFunctionType Real Real
            , UnaryFunctionType Complex Complex
            ]

        _ ->
            []
                |> sort


findMatchingType : BaseType -> String -> Maybe UnaryFunctionType
findMatchingType operandType funcName =
    getTypes funcName
        |> List.filter (\{ inputType } -> isSubtype operandType inputType)
        |> List.head
