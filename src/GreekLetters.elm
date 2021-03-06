module GreekLetters exposing (isLower, isUpper, isNonRoman, symbols, names, greek, toName, toSymbol, toNameFromString)

import StringUtils exposing (toSentenceCase)
import Char
import Dict exposing (Dict)


type alias GreekLetter =
    { name : String
    , symbol : Char
    }


isLower : GreekLetter -> Bool
isLower greekLetter =
    List.member greekLetter lowercaseLetters_


isUpper : GreekLetter -> Bool
isUpper greekLetter =
    List.member greekLetter uppercaseLetters_


isNonRoman : GreekLetter -> Bool
isNonRoman greekLetter =
    let
        uniqueToGreek : List String
        uniqueToGreek =
            [ "alpha", "beta", "gamma", "delta", "zeta", "eta", "theta", "iota", "kappa", "mu", "nu", "xi", "rho", "sigma", "tau", "chi", "psi", "omega", "Gamma", "Delta", "Theta", "Lambda", "Xi", "Pi", "Sigma", "Phi", "Psi", "Omega" ]
    in
        List.member greekLetter.name uniqueToGreek


toUpper : GreekLetter -> GreekLetter
toUpper { name, symbol } =
    GreekLetter (toSentenceCase name) (Char.toUpper symbol)


symbols : List GreekLetter -> List Char
symbols =
    List.map .symbol


names : List GreekLetter -> List String
names =
    List.map .name


lowercaseLetters_ : List GreekLetter
lowercaseLetters_ =
    [ GreekLetter "alpha" 'α'
    , GreekLetter "beta" 'β'
    , GreekLetter "gamma" 'γ'
    , GreekLetter "delta" 'δ'
    , GreekLetter "epsilon" 'ε'
    , GreekLetter "zeta" 'ζ'
    , GreekLetter "eta" 'η'
    , GreekLetter "theta" 'θ'
    , GreekLetter "iota" 'ι'
    , GreekLetter "kappa" 'κ'
    , GreekLetter "lambda" 'λ'
    , GreekLetter "mu" 'μ'
    , GreekLetter "nu" 'ν'
    , GreekLetter "xi" 'ξ'
    , GreekLetter "omicron" 'ο'
    , GreekLetter "pi" 'π'
    , GreekLetter "rho" 'ρ'
    , GreekLetter "sigma" 'σ'
    , GreekLetter "tau" 'τ'
    , GreekLetter "upsilon" 'υ'
    , GreekLetter "phi" 'φ'
    , GreekLetter "chi" 'χ'
    , GreekLetter "psi" 'ψ'
    , GreekLetter "omega" 'ω'
    ]


uppercaseLetters_ : List GreekLetter
uppercaseLetters_ =
    List.map toUpper lowercaseLetters_


greek : List GreekLetter
greek =
    lowercaseLetters_ ++ uppercaseLetters_


nameDict : Dict Char String
nameDict =
    greek
        |> List.map (\{ name, symbol } -> ( symbol, name ))
        |> Dict.fromList


toName : Char -> Maybe String
toName symbol =
    Dict.get symbol nameDict


nameStringDict : Dict String String
nameStringDict =
    greek
        |> List.map (\{ name, symbol } -> ( String.fromChar symbol, name ))
        |> Dict.fromList


toNameFromString : String -> Maybe String
toNameFromString symbol =
    Dict.get symbol nameStringDict


symbolDict : Dict String Char
symbolDict =
    greek
        |> List.map (\{ name, symbol } -> ( name, symbol ))
        |> Dict.fromList


toSymbol : String -> Maybe Char
toSymbol name =
    Dict.get name symbolDict
