module ParserUtils exposing (..)

import Parser exposing (..)
import Char
import String
import Html exposing (Html, text, div, ul, li)
import Html.Attributes exposing (class)


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
        div []
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
        splits =
            List.map (\context -> context.row) stack
    in
        div [] [ text (toString (splitSource splits source)) ]



--case stack of
--[] ->
--source
--stack
--|> List.map formatContext
--|> div [ class "contextStack" ]


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


formatContext : Context -> Html msg
formatContext context =
    div [ class "context" ]
        [ text (toString context) ]
