module MathTree exposing (..)


type Expr
    = Constant Float
    | Integer Int
    | Variable String
    | Sum String Int Int Expr
    | Apply1 Func1 Expr
    | Apply2 Func2 Expr Expr



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
    | Divide
    | Exponent
    | Log
