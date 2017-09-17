module Scope exposing (Parameter(..), Scope, addFreeVariables, allVariables, asUniforms, empty, isEmpty, pin, pinnedVariables, set, unpin)

import Dict exposing (Dict)
import UnsafeUniforms exposing (UniformParam(..))


-- Parameters


type Parameter
    = Real Float


defaultParameter : Parameter
defaultParameter =
    Real 0


toUniformParam : Parameter -> UniformParam
toUniformParam param =
    case param of
        Real val ->
            FloatParam val



-- Scope functions


type Scope
    = Scope (Dict String { pinned : Bool, value : Parameter })


empty : Scope
empty =
    Scope Dict.empty


isEmpty : Scope -> Bool
isEmpty (Scope scope) =
    Dict.isEmpty scope


pin : String -> Scope -> Scope
pin name scope =
    changePinned_ name True scope


unpin : String -> Scope -> Scope
unpin name scope =
    changePinned_ name False scope


changePinned_ : String -> Bool -> Scope -> Scope
changePinned_ name pinned (Scope scope) =
    Dict.update name
        (\maybeVar ->
            case maybeVar of
                Just var ->
                    Just { var | pinned = pinned }

                Nothing ->
                    Just { pinned = pinned, value = defaultParameter }
        )
        scope
        |> Scope


addFreeVariables : List String -> Scope -> Scope
addFreeVariables names (Scope scope) =
    List.map (\name -> ( name, { pinned = False, value = defaultParameter } )) names
        |> Dict.fromList
        |> Dict.union scope
        |> Scope


allVariables : Scope -> List ( String, { pinned : Bool, value : Parameter } )
allVariables (Scope scope) =
    Dict.toList scope


pinnedVariables : Scope -> Dict String Parameter
pinnedVariables (Scope scope) =
    Dict.filter (\_ { pinned } -> pinned) scope
        |> Dict.map (\_ { value } -> value)


set : String -> Parameter -> Scope -> Scope
set name value (Scope scope) =
    Dict.update name
        (\maybeVar ->
            case maybeVar of
                Just var ->
                    Just { var | value = value }

                Nothing ->
                    Just { pinned = True, value = value }
        )
        scope
        |> Scope


asUniforms : Scope -> Dict String UniformParam
asUniforms scope =
    let
        _ =
            Debug.log "scope" (pinnedVariables scope)
    in
    pinnedVariables scope
        |> Dict.map (\_ value -> toUniformParam value)
