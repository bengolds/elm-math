module Lexer exposing (..)

import Regex exposing (..)
import List exposing (..)
import List.Extra exposing (minimumBy)
import Maybe.Extra


type alias TokenMatch tokenType =
    { token : LexResult tokenType
    , match : String
    , submatches : List (Maybe String)
    , startIndex : Int
    , endIndex : Int
    , length : Int
    }


type LexResult tokenType
    = LexError String
    | Ignore
    | Good tokenType


makeTokenMatch : TokenConstructor tokenType -> Regex.Match -> TokenMatch tokenType
makeTokenMatch constructor match =
    { token = constructor match.match match.submatches
    , match = match.match
    , submatches = match.submatches
    , startIndex = match.index
    , endIndex = match.index + (String.length match.match)
    , length = String.length match.match
    }


type alias TokenConstructor tokenType =
    String -> List (Maybe String) -> LexResult tokenType


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
    always (always (Good token))


floatToken : (Float -> tokenType) -> TokenConstructor tokenType
floatToken token =
    (\match _ ->
        case String.toFloat match of
            Ok val ->
                Good (token val)

            Err error ->
                LexError error
    )


stringToken : (String -> tokenType) -> Int -> TokenConstructor tokenType
stringToken token captureGroup =
    (\match submatches ->
        case captureGroup of
            0 ->
                Good (token match)

            _ ->
                let
                    submatch =
                        List.Extra.getAt (captureGroup - 1) submatches
                            |> Maybe.Extra.join
                in
                    case submatch of
                        Nothing ->
                            LexError "No match found"

                        Just val ->
                            Good (token val)
    )


ignore : TokenConstructor tokenType
ignore =
    always (always Ignore)


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
                    [ Err (remainingChars ++ " is not a valid token") ]

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

                continuation =
                    consumeMatches_ restOfMatches originalString nextIndex
            in
                case result of
                    Ignore ->
                        continuation

                    LexError error ->
                        Err error :: continuation

                    Good token ->
                        Ok token :: continuation



-- Consume either the next token or the characters up to the next token
-- Returns the result of the consumption as well as the next index to consume


consumeNext_ : TokenMatch tokenType -> String -> Int -> ( LexResult tokenType, Int )
consumeNext_ nextMatch originalString index =
    if nextMatch.startIndex == index then
        ( nextMatch.token
        , nextMatch.endIndex
        )
    else
        ( notATokenError_ (String.slice index nextMatch.startIndex originalString)
        , nextMatch.startIndex
        )


notATokenError_ : String -> LexResult tokenType
notATokenError_ val =
    LexError (val ++ " is not a valid token")


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
