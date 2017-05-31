module ParserUtils exposing (..)

import Parser exposing (..)
import Char
import String
import List.Extra exposing (groupWhileTransitively, last)
import Html exposing (Html, text, div, ul, li, span)
import Html.Attributes exposing (class, style)


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


(|*) : Parser a -> Parser b -> Parser ( a, b )
(|*) =
    map2 (,)
infixl 5 |*


chainl : Parser a -> Parser (a -> a -> a) -> Parser a
chainl object combiner =
    (object
        |* repeat zeroOrMore
            (combiner
                |* object
            )
    )
        |> map
            (\( start, funcs ) ->
                List.foldl (\( fn, a2 ) a1 -> fn a1 a2) start funcs
            )


chainr : Parser a -> Parser (a -> a -> a) -> Parser a
chainr object combiner =
    (repeat zeroOrMore (delayedCommitMap (,) object combiner)
        |* object
    )
        |> map
            (\( funcs, start ) ->
                List.foldr (\( a2, fn ) a1 -> fn a2 a1) start funcs
            )


list : Parser a -> Parser b -> Parser (List a)
list object separator =
    map2 (::) object (repeat zeroOrMore (succeed identity |. separator |= object))


prettyPrintError : Parser.Error -> Html msg
prettyPrintError err =
    let
        problemDiv =
            case err.problem of
                BadOneOf problems ->
                    div [ class "tree" ] <|
                        [ text "I'm looking for a: "
                        , ul [] (List.map problemAsNode problems)
                        ]

                _ ->
                    text (toString err.problem)
    in
        div [ class "error" ]
            [ problemDiv
            , contextStack err.context err.source
            ]


problemAsNode : Parser.Problem -> Html msg
problemAsNode problem =
    case problem of
        BadOneOf problems ->
            li [] <|
                [ text "Or one of these: "
                , ul [] (List.map problemAsNode problems)
                ]

        --div [ class "error", class "oneOf" ] <|
        --[ div [ class "title" ] [ text "I tried: " ]
        --, div [ class "oneOfErrors" ] (List.map problemDiv problems)
        --]
        _ ->
            li [] [ text (toString problem) ]


contextStack : List Context -> String -> Html msg
contextStack stack source =
    -- MAKE THIS WORK WITH ROW/COLUMN
    let
        startContext : Context
        startContext =
            { col = 0, row = 0, description = "none" }

        endContext : Context
        endContext =
            { col = (String.length source) + 1, row = 1, description = "none" }

        enhancedStack =
            ([ startContext ] ++ List.reverse stack ++ [ endContext ])
                |> pairwiseMap
                    (\curr next ->
                        { description = curr.description
                        , substring = String.slice (curr.col - 1) (next.col - 1) source
                        }
                    )
                |> groupWhileTransitively (\curr next -> curr.substring == "")
                |> List.map
                    (\contexts ->
                        { descriptions = List.map (.description) contexts
                        , substring = last contexts |> Maybe.map .substring |> Maybe.withDefault ""
                        }
                    )

        colors : List String
        colors =
            [ "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue" ]
    in
        div [ class "contextStack" ]
            (enhancedStack
                |> List.map2
                    (\color context ->
                        span
                            [ style [ ( "color", color ) ] ]
                            [ text context.substring
                            , tooltip
                                [ text <| "Contexts: " ++ String.join "→" context.descriptions ]
                            ]
                    )
                    colors
            )


tooltip : List (Html msg) -> Html msg
tooltip contents =
    div [ class "tooltip" ] contents


splitSource : List Int -> String -> List String
splitSource splits source =
    case splits of
        [] ->
            [ source ]

        x :: xs ->
            let
                remainingSplits =
                    List.map ((-) x) xs
            in
                String.left x source :: splitSource remainingSplits (String.dropLeft x source)
