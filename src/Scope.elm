module Scope
    exposing
        ( Parameter(..)
        , Scope
        , addFreeVariables
        , allVariables
        , asUniforms
        , empty
        , get
        , isEmpty
        , pin
        , pinnedVariables
        , set
        , unpin
        , update
        )

import Dict exposing (Dict)
import UnsafeUniforms exposing (UniformParam(..))


-- Floats


type Parameter
    = Real Float


defaultFloat : Parameter
defaultFloat =
    Real 0


toUniformParam : Parameter -> UniformParam
toUniformParam param =
    case param of
        Real val ->
            FloatParam val



-- Scope functions


type Scope
    = Scope (Dict String { pinned : Bool, value : Float })


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
                    Just { pinned = pinned, value = 0 }
        )
        scope
        |> Scope


addFreeVariables : List String -> Scope -> Scope
addFreeVariables names (Scope scope) =
    List.map (\name -> ( name, { pinned = False, value = 0 } )) names
        |> Dict.fromList
        |> Dict.union scope
        |> Scope


allVariables : Scope -> List ( String, { pinned : Bool, value : Float } )
allVariables (Scope scope) =
    Dict.toList scope


pinnedVariables : Scope -> Dict String Float
pinnedVariables (Scope scope) =
    Dict.filter (\_ { pinned } -> pinned) scope
        |> Dict.map (\_ { value } -> value)


set : String -> Float -> Scope -> Scope
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


update : String -> (Float -> Float) -> Scope -> Scope
update name fn (Scope scope) =
    Dict.update name
        (Maybe.map
            (\{ pinned, value } ->
                { pinned = pinned, value = fn value }
            )
        )
        scope
        |> Scope


get : String -> Scope -> Maybe Float
get name (Scope scope) =
    Dict.get name scope
        |> Maybe.map .value


asUniforms : Scope -> Dict String UniformParam
asUniforms scope =
    let
        _ =
            Debug.log "scope" (pinnedVariables scope)
    in
    pinnedVariables scope
        |> Dict.map (\_ value -> toUniformParam (Real value))
