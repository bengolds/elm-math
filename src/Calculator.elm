module Calculator exposing (calculate)

import MathTree as Tree exposing (Expr, Func1(..), Func2(..))
import Set exposing (Set)


type CalculateResult
    = Real Float
    | Integer Int
    | Function (Set String)


calculate : Expr -> CalculateResult
calculate expr =
    case expr of
        Tree.Constant val ->
            Real val

        Tree.Integer val ->
            Integer val

        Tree.Variable name ->
            Function (Set.singleton name)

        Tree.Apply1 fn arg ->
            apply1 fn arg

        Tree.Apply2 fn arg1 arg2 ->
            apply2 fn arg1 arg2

        --Sum indexVar from to summand ->
        --case calculate to of
        --Number val ->
        --List.sum <|
        _ ->
            Real -1


apply1 : Func1 -> Expr -> CalculateResult
apply1 func1 arg =
    case calculate arg of
        Real val ->
            Real <|
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

                    Abs ->
                        abs val

                    Factorial ->
                        --TODO: Fill this in once typing is done
                        val

        otherwise ->
            otherwise


apply2 : Func2 -> Expr -> Expr -> CalculateResult
apply2 func2 arg1 arg2 =
    case ( calculate arg1, calculate arg2 ) of
        ( Real n1, Real n2 ) ->
            Real <|
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

                    Log ->
                        logBase n1 n2

        ( Function vars1, Function vars2 ) ->
            Function (Set.union vars1 vars2)

        ( Function vars1, _ ) ->
            Function vars1

        ( _, Function vars2 ) ->
            Function vars2

        ( _, _ ) ->
            Real 0
