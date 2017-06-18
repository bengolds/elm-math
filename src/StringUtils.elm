module StringUtils exposing (..)

import String


toSentenceCase : String -> String
toSentenceCase string =
    (String.left 1 string |> String.toUpper) ++ (String.dropLeft 1 string)
