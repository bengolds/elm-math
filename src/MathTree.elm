module MathTree exposing (Expr(..), prettyPrint, getVariables, isImplicitEquation)

import StringUtils exposing (toSentenceCase)
import Set exposing (Set)


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
    | Equals Expr Expr
    | Func1 String Expr
    | Func2 String Expr Expr


prettyPrint : Expr -> String
prettyPrint expr =
    case expr of
        Func1 func _ ->
            toSentenceCase func

        Func2 func _ _ ->
            toSentenceCase func

        Equals _ _ ->
            "Equals"

        Sum _ _ _ _ ->
            "Sum"

        Product _ _ _ _ ->
            "Product"

        Integral _ _ _ _ ->
            "Integral"

        elsewise ->
            toString elsewise


getVariables : Expr -> List String
getVariables expr =
    getVariablesHelper expr
        |> Set.toList
        |> List.sort


getVariablesHelper : Expr -> Set String
getVariablesHelper expr =
    let
        summationVariables dummyVar from to expr =
            Set.union (getVariablesHelper from) (getVariablesHelper to)
                |> Set.union (getVariablesHelper expr)
                |> Set.remove dummyVar
    in
        case expr of
            Real _ ->
                Set.empty

            Rational _ ->
                Set.empty

            Integer _ ->
                Set.empty

            Variable name ->
                Set.singleton name

            Differential expr _ ->
                getVariablesHelper expr

            ImaginaryUnit ->
                Set.empty

            Sum dummyVar from to expr ->
                summationVariables dummyVar from to expr

            Product dummyVar from to expr ->
                summationVariables dummyVar from to expr

            Integral dummyVar from to expr ->
                summationVariables dummyVar from to expr

            Equals expr1 expr2 ->
                Set.union (getVariablesHelper expr1) (getVariablesHelper expr2)

            Func1 _ expr ->
                getVariablesHelper expr

            Func2 _ expr1 expr2 ->
                Set.union (getVariablesHelper expr1) (getVariablesHelper expr2)


isImplicitEquation : Expr -> Bool
isImplicitEquation expr =
    case expr of
        Equals _ _ ->
            True

        _ ->
            False
