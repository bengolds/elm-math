module MathTree exposing (..)


type Expr
    = Real Float
    | Rational Float
    | Integer Int
    | Variable String
    | ImaginaryUnit
    | Sum String Int Int Expr
    | Apply1 Func1 Expr
    | Apply2 Func2 Expr Expr


prettyPrint : Expr -> String
prettyPrint val =
    case val of
        Apply1 func _ ->
            toString func

        Apply2 func _ _ ->
            toString func

        elsewise ->
            toString elsewise



--type SummationIndex
--= Infinity
--|


type Func1
    = Negative
    | Sin
    | Cos
    | Tan
    | Sec
    | Csc
    | Cot
    | Sinh
    | Cosh
    | Tanh
    | Arcsin
    | Arccos
    | Arctan
    | Abs
    | Factorial


type Func2
    = Plus
    | Minus
    | Times
    | Dot
    | Divide
    | Exponent
    | Log
    | NthRoot
