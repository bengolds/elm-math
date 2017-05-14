module Lexer exposing (..)

import Regex exposing (..)
import List exposing (..)
import List.Extra exposing (minimumBy)


type alias TokenMatch tokenType =
    { token : Result String tokenType
    , match : String
    , startIndex : Int
    , endIndex : Int
    , length : Int
    }


makeTokenMatch : TokenConstructor tokenType -> Regex.Match -> TokenMatch tokenType
makeTokenMatch constructor match =
    { token = constructor match.match
    , match = match.match
    , startIndex = match.index
    , endIndex = match.index + (String.length match.match)
    , length = String.length match.match
    }


type alias TokenConstructor tokenType =
    String -> Result String tokenType


type alias Rule tokenType =
    { constructor : TokenConstructor tokenType
    , pattern : String
    , precedence : Int
    }


type alias Grammar tokenType =
    List (Rule tokenType)


plainToken : tokenType -> TokenConstructor tokenType
plainToken token =
    -- Convenience function for tokens with no extras
    always (Ok token)


floatToken : (Float -> tokenType) -> TokenConstructor tokenType
floatToken token =
    (\string ->
        String.toFloat string
            |> Result.map token
    )


stringToken : (String -> tokenType) -> TokenConstructor tokenType
stringToken token =
    (\string -> Ok (token string))


lex : Grammar tokenType -> String -> Result (List String) (List tokenType)
lex grammar string =
    let
        -- Get a list of (Token, Match)
        allMatches : List (TokenMatch tokenType)
        allMatches =
            getAllMatches_ grammar string

        ( errors, tokens ) =
            consumeMatches_ allMatches string 0 |> splitResults_
    in
        -- If there are any errors, don't return any tokens. Just the errors.
        case errors of
            [] ->
                Ok tokens

            _ ->
                Err errors


getAllMatches_ : Grammar tokenType -> String -> List (TokenMatch tokenType)
getAllMatches_ grammar string =
    map
        (\{ constructor, pattern, precedence } ->
            Regex.find All (regex pattern) string
                |> map (makeTokenMatch constructor)
        )
        grammar
        |> concat


splitResults_ : List (Result a b) -> ( List a, List b )
splitResults_ results =
    List.foldr
        (\result ( errors, oks ) ->
            case result of
                Ok val ->
                    ( errors, val :: oks )

                Err val ->
                    ( val :: errors, oks )
        )
        ( [], [] )
        results


consumeMatches_ : List (TokenMatch tokenType) -> String -> Int -> List (Result String tokenType)
consumeMatches_ tokenMatches originalString index =
    case tokenMatches of
        [] ->
            case (String.dropLeft index originalString) of
                "" ->
                    []

                remainingChars ->
                    [ notATokenError_ remainingChars ]

        firstTokenMatch :: _ ->
            let
                nextMatch : TokenMatch tokenType
                nextMatch =
                    getNextMatch_ tokenMatches
                        |> Maybe.withDefault firstTokenMatch

                ( result, nextIndex ) =
                    consumeNext_ nextMatch originalString index

                restOfMatches : List (TokenMatch tokenType)
                restOfMatches =
                    removeMatchesUpTo_ nextIndex tokenMatches
            in
                result :: (consumeMatches_ restOfMatches originalString nextIndex)



-- Consume either the next token or the characters up to the next token
-- Returns the result of the consumption as well as the next index to consume


consumeNext_ : TokenMatch tokenType -> String -> Int -> ( Result String tokenType, Int )
consumeNext_ nextMatch originalString index =
    if nextMatch.startIndex == index then
        ( nextMatch.token
        , nextMatch.endIndex
        )
    else
        ( notATokenError_ (String.slice index nextMatch.startIndex originalString)
        , nextMatch.startIndex
        )


notATokenError_ : String -> Result String a
notATokenError_ val =
    Err (val ++ " is not a valid token")


getNextMatch_ : List (TokenMatch tokenType) -> Maybe (TokenMatch tokenType)
getNextMatch_ tokenMatches =
    tokenMatches
        |> minimumBy
            (\tokenMatch ->
                -- (-tokenMatch.length) means we sort by the longest
                ( tokenMatch.startIndex, -tokenMatch.length )
            )


removeMatchesUpTo_ : Int -> List (TokenMatch tokenType) -> List (TokenMatch tokenType)
removeMatchesUpTo_ index tokenMatches =
    tokenMatches
        |> filter (\tokenMatch -> tokenMatch.startIndex >= index)
