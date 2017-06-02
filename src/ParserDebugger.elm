module ParserDebugger exposing (..)

import ParserDebuggerCss exposing (..)
import Parser exposing (..)
import ParserUtils exposing (..)
import String
import List.Extra exposing (groupWhileTransitively, last, find)
import Html exposing (Html, text, div, ul, li, span)
import Html.Attributes exposing (style)


{ id, class, classList } =
    parserDebuggerNamespace


prettyPrintError : Parser.Error -> Html msg
prettyPrintError err =
    let
        headerDiv =
            Html.h1 [ class [ DebuggerHeader ] ]
                [ text "Parser Error" ]

        errorMessagePrefix : String
        errorMessagePrefix =
            case List.head err.context of
                Just { description } ->
                    "I'm trying to build a " ++ description ++ ", but "

                Nothing ->
                    "I ran into an error while parsing: "

        errorMessageDiv =
            case err.problem of
                BadOneOf problems ->
                    div []
                        [ text (errorMessagePrefix ++ "I needed to find:")
                        , div [ class [ OneOfList ] ] <| List.map problemAsOneOfNode problems
                        ]

                _ ->
                    text <| errorMessagePrefix ++ "I expected " ++ failureDescription err.problem
    in
        div [ class [ ErrorDebugger ] ]
            [ headerDiv
            , contextStack err
            , errorMessageDiv
            ]


getFailMessage : List Problem -> Maybe String
getFailMessage problems =
    List.filterMap
        (\problem ->
            case problem of
                Fail message ->
                    Just message

                _ ->
                    Nothing
        )
        problems
        |> List.head


problemAsOneOfNode : Parser.Problem -> Html msg
problemAsOneOfNode problem =
    case problem of
        Fail _ ->
            text ""

        _ ->
            li [] [ text <| failureDescription problem ]


failureDescription : Parser.Problem -> String
failureDescription problem =
    case problem of
        BadOneOf problems ->
            getFailMessage problems
                |> Maybe.withDefault "a oneOf with no fail message..."

        BadFloat ->
            "a float, like 6.0 or 3e10"

        BadInt ->
            "an integer, like 1 or 2"

        ExpectingEnd ->
            "the end of the input"

        ExpectingSymbol symbol ->
            "the symbol " ++ symbol

        ExpectingKeyword keyword ->
            "the keyword " ++ keyword

        ExpectingVariable ->
            "a variable"

        _ ->
            (toString problem)



-- TODO: Make this work with row/column


contextStack : Parser.Error -> Html msg
contextStack error =
    let
        groupedContexts =
            addSubstringsToContexts error.context error.source
                |> groupContextsByLocation
                |> markAtErrorLocation (error.col - 1)

        colors : List String
        colors =
            [ "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue" ]
    in
        div [ class [ ContextStack ] ] <|
            List.map2 spanFromContextGroup groupedContexts colors


spanFromContextGroup context color =
    let
        substringSpan =
            case context.errorLocation of
                Just col ->
                    let
                        pre =
                            String.left col context.substring

                        errorChar =
                            String.slice col (col + 1) context.substring

                        post =
                            String.dropLeft (col + 1) context.substring

                        arrow =
                            div [ class [ ErrorArrow ] ] [ text "↓" ]
                    in
                        span []
                            [ text pre
                            , span [ class [ ErrorChar ] ]
                                [ text errorChar
                                , arrow
                                ]
                            , text post
                            ]

                Nothing ->
                    text context.substring
    in
        span
            [ style [ ( "color", color ) ] ]
            [ substringSpan
            , tooltip
                [ text <| "Contexts: " ++ String.join "→" context.descriptions ]
            ]


addSubstringsToContexts contexts source =
    let
        startContext =
            { col = 0, row = 0, description = "none" }

        endContext =
            { col = (String.length source) + 1, row = 1, description = "none" }

        extendedContexts =
            ([ startContext ] ++ List.reverse contexts ++ [ endContext ])

        addSubstring context1 context2 =
            { description = context1.description
            , substring = String.slice (context1.col - 1) (context2.col - 1) source
            }
    in
        extendedContexts
            |> pairwiseMap addSubstring


groupContextsByLocation contexts =
    let
        getLastSubstring groupOfContexts =
            last groupOfContexts
                |> Maybe.map .substring
                |> Maybe.withDefault ""
    in
        contexts
            |> groupWhileTransitively (\curr _ -> curr.substring == "")
            |> List.map
                (\contexts ->
                    { descriptions = List.map (.description) contexts
                    , substring = getLastSubstring contexts
                    , errorLocation = Nothing
                    }
                )


markAtErrorLocation index groupedContexts =
    let
        _ =
            Debug.log "groupedContexts" ( groupedContexts, index )
    in
        case groupedContexts of
            [] ->
                []

            x :: xs ->
                let
                    length =
                        String.length x.substring
                in
                    if index < length || index == 0 then
                        { x | errorLocation = Just index } :: xs
                    else
                        x :: markAtErrorLocation (index - length) xs


tooltip : List (Html msg) -> Html msg
tooltip contents =
    div [ class [ ContextTooltip ] ] contents
