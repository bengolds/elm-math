module Calculator exposing (calculate)

import MathTree exposing (..)
import Set exposing (Set)


type CalculateResult
    = Number Float
    | Function (Set String)


calculate : Expr -> CalculateResult
calculate expr =
    case expr of
        Constant val ->
            Number val

        Variable name ->
            Function (Set.singleton name)

        Apply1 fn arg ->
            apply1 fn arg

        Apply2 fn arg1 arg2 ->
            apply2 fn arg1 arg2

        _ ->
            Number -1


apply1 : Func1 -> Expr -> CalculateResult
apply1 func1 arg =
    case calculate arg of
        Number val ->
            Number <|
                case func1 of
                    Negative ->
                        negate val

                    Sin ->
                        sin val

                    Cos ->
                        cos val

                    Tan ->
                        tan val

                    Sec ->
                        1 / (cos val)

                    Csc ->
                        1 / (sin val)

                    Cot ->
                        1 / (tan val)

                    Sinh ->
                        (e ^ val - e ^ (-val)) / 2

                    Cosh ->
                        (e ^ val + e ^ (-val)) / 2

                    Tanh ->
                        (e ^ val - e ^ (-val)) / (e ^ val + e ^ (-val))

                    Arcsin ->
                        asin val

                    Arccos ->
                        acos val

                    Arctan ->
                        atan val

                    Ln ->
                        logBase e val

        otherwise ->
            otherwise


apply2 : Func2 -> Expr -> Expr -> CalculateResult
apply2 func2 arg1 arg2 =
    case ( calculate arg1, calculate arg2 ) of
        ( Number n1, Number n2 ) ->
            Number <|
                case func2 of
                    Plus ->
                        n1 + n2

                    Minus ->
                        n1 - n2

                    Times ->
                        n1 * n2

                    Divide ->
                        n1 / n2

                    Exponent ->
                        n1 ^ n2

        ( Function vars1, Function vars2 ) ->
            Function (Set.union vars1 vars2)

        ( Function vars1, _ ) ->
            Function vars1

        ( _, Function vars2 ) ->
            Function vars2
