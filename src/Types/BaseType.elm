module Types.BaseType exposing (..)


type BaseType
    = Integer
    | Real
    | Complex


typeLevel : BaseType -> Int
typeLevel tipe =
    case tipe of
        Integer ->
            0

        Real ->
            1

        Complex ->
            2


isSubtype : BaseType -> BaseType -> Bool
isSubtype child parent =
    if child == parent then
        True
    else
        case getParentType child of
            Just upcast ->
                isSubtype upcast parent

            Nothing ->
                False


getParentType : BaseType -> Maybe BaseType
getParentType child =
    case child of
        Integer ->
            Just Real

        Real ->
            Just Complex

        _ ->
            Nothing
