module MathTree exposing (..)

import StringUtils exposing (toSentenceCase)


type Expr
    = Real Float
    | Rational Float
    | Integer Int
    | Variable String
    | Differential Expr String
    | ImaginaryUnit
    | Sum String Expr Expr Expr
    | Product String Expr Expr Expr
    | Integral String Expr Expr Expr
    | Func1 String Expr
    | Func2 String Expr Expr


prettyPrint : Expr -> String
prettyPrint val =
    case val of
        Func1 func _ ->
            toSentenceCase func

        Func2 func _ _ ->
            toSentenceCase func

        Sum _ _ _ _ ->
            "Sum"

        Product _ _ _ _ ->
            "Product"

        elsewise ->
            toString elsewise



--type SummationIndex
--= Infinity
--|
--type Func1
--= Negative
--| Sin
--| Cos
--| Tan
--| Sec
--| Csc
--| Cot
--| Sinh
--| Cosh
--| Tanh
--| Arcsin
--| Arccos
--| Arctan
--| Abs
--| Factorial
--type Func2
--= Plus
--| Minus
--| Times
--| Dot
--| Divide
--| Exponent
--| Log
--| NthRoot
