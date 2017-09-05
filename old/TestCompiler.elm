module TestCompiler exposing (..)

import MathTree exposing (Expr(..))
import Dict exposing (Dict)


-- Make version with scope; so that you can compile scope in


compile : Expr -> CompileResult
compile expr =
    case expr of
        Real val ->
            Constant val

        Rational val ->
            Constant val

        Integer val ->
            Constant (toFloat val)

        Variable name ->
            Function (\scope -> (getName scope name))

        Differential _ _ ->
            CompileError

        ImaginaryUnit ->
            CompileError

        -- Compiled version should check for constants here
        Sum name from to over ->
            Function (foldOver name from to over (+) 0)

        Product name from to over ->
            Function (foldOver name from to over (*) 1)

        Integral _ _ _ _ ->
            CompileError

        Equals _ _ ->
            CompileError

        Func1 func arg ->
            case (compile arg) of
                Constant val ->
                    Constant <| func1 func val

                Function f ->
                    Function (\scope -> Maybe.map (func1 func) (f scope))

                CompileError ->
                    CompileError

        Func2 func arg1 arg2 ->
            case ( compile arg1, compile arg2 ) of
                ( Constant val1, Constant val2 ) ->
                    Constant <| func2 func val1 val2

                ( Function f, compiled ) ->
                    Function (\scope -> Maybe.map2 (func2 func) (f scope) (eval compiled scope))

                ( compiled, Function f ) ->
                    Function (\scope -> Maybe.map2 (func2 func) (eval compiled scope) (f scope))

                ( _, _ ) ->
                    CompileError


type CompileResult
    = Constant Float
    | Function (Scope -> Maybe Float)
    | CompileError


eval : CompileResult -> Scope -> Maybe Float
eval result scope =
    case result of
        Constant val ->
            Just val

        Function f ->
            f scope

        CompileError ->
            Nothing


type alias Scope =
    Dict String Float


testScope =
    Dict.fromList [ ( "x", 1 ), ( "y", 2 ) ]


getName scope name =
    Dict.get name scope


func1 : String -> Float -> Float
func1 name arg =
    case name of
        "sin" ->
            sin arg

        "cos" ->
            cos arg

        _ ->
            0


func2 : String -> Float -> Float -> Float
func2 name arg1 arg2 =
    case name of
        "plus" ->
            arg1 + arg2

        "minus" ->
            arg1 - arg2

        "frac" ->
            arg1 / arg2

        "times" ->
            arg1 * arg2

        "dot" ->
            arg1 * arg2

        "exponent" ->
            arg1 ^ arg2

        _ ->
            0


foldOver name from to over func start =
    (\scope ->
        let
            maybeFrom : Maybe Int
            maybeFrom =
                Maybe.map round <| eval (compile from) scope

            maybeTo : Maybe Int
            maybeTo =
                Maybe.map round <| eval (compile to) scope

            range : Maybe (List Int)
            range =
                Maybe.map2 List.range maybeFrom maybeTo

            compiledOver =
                compile over
        in
            Maybe.andThen
                (List.foldl
                    (\index sum ->
                        let
                            newScope =
                                Dict.insert name (toFloat index) scope
                        in
                            Maybe.map2 func sum (eval (compile over) newScope)
                    )
                    (Just start)
                )
                range
    )
