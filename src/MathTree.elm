module MathTree exposing (..)


type Expr
    = Constant Float
    | Variable String
    | Sum String Int Expr Expr
    | Apply1 Func1 Expr
    | Apply2 Func2 Expr Expr


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


type Func2
    = Plus
    | Minus
    | Times
    | Divide
    | Exponent
    | Log
