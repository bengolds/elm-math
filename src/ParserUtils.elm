module ParserUtils exposing (..)

import Parser exposing (..)
import Char


pairwiseMap : (a -> a -> b) -> List a -> List b
pairwiseMap fn list =
    case list of
        x :: y :: rest ->
            fn x y :: pairwiseMap fn (y :: rest)

        _ ->
            []


isLetter : Char -> Bool
isLetter c =
    Char.isUpper c || Char.isLower c


(|+) : Parser a -> Parser b -> Parser ( a, b )
(|+) =
    map2 (,)
infixl 5 |+


(|%) : Parser a -> Parser b -> Parser b
(|%) p1 p2 =
    andThen (always p2) p1
infixl 5 |%


chainl : Parser a -> Parser (a -> a -> a) -> Parser a
chainl object combiner =
    (object
        |+ repeat zeroOrMore
            (combiner
                |+ object
            )
    )
        |> map
            (\( start, funcs ) ->
                List.foldl (\( fn, a2 ) a1 -> fn a1 a2) start funcs
            )


chainr : Parser a -> Parser (a -> a -> a) -> Parser a
chainr object combiner =
    (repeat zeroOrMore (delayedCommitMap (,) object combiner)
        |+ object
    )
        |> map
            (\( funcs, start ) ->
                List.foldr (\( a2, fn ) a1 -> fn a2 a1) start funcs
            )


applyl : List (a -> a) -> a -> a
applyl fns start =
    case fns of
        [] ->
            start

        x :: xs ->
            applyl xs (x start)


applyr : List (a -> a) -> a -> a
applyr fns start =
    applyl (List.reverse fns) start


list : Parser a -> Parser b -> Parser (List a)
list object separator =
    map2 (::) object (repeat zeroOrMore (succeed identity |. separator |= object))
