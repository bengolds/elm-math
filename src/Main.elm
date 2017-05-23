module Main exposing (..)

import Html exposing (..)
import Mathquill exposing (mathField, onEdit)
import Parser exposing (..)


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



-- MODEL


type alias Model =
    { inputString : String }


initialModel : Model
initialModel =
    { inputString = "" }


init : ( Model, Cmd Msg )
init =
    ( initialModel, Cmd.none )



-- UPDATE


type Msg
    = QuillEdited String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        QuillEdited newString ->
            ( { model | inputString = newString }, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- VIEW


type Expr
    = Variable String
    | MyInt Int
    | MyFloat Float
    | MyFunction Function


type Function
    = Sin Expr
    | Cos Expr
    | Tan Expr
    | Frac Expr Expr
    | Add Expr Expr



--type alias Function2 =
--{ funcType : Function2Type
--, arg1 : Expr
--, arg2 : Expr
--}



--type Function2Type
--= Frac
--| Plus
--| Minus


view : Model -> Html Msg
view model =
    div []
        [ mathField [ onEdit QuillEdited ]
        , br [] []
        , text model.inputString
        , br [] []
        , text (toString (run expr model.inputString))
        ]


expr : Parser Expr
expr =
    inContext "expression" <|
        oneOf
            [ lazy (\_ -> bracketExpr)
            , Parser.map MyFunction (lazy (\_ -> functionParser))
            , Parser.map MyFloat float
            ]


bracketExpr : Parser Expr
bracketExpr =
    inContext "brackets" <|
        succeed identity
            |. oneOf
                [ symbol "("
                , command "left("
                , symbol "["
                , command "left["
                , symbol "{"
                , command "left{"
                ]
            |= expr
            |. oneOf
                [ symbol ")"
                , command "right)"
                , symbol "]"
                , command "right]"
                , symbol "}"
                , command "right}"
                ]


functionParser : Parser Function
functionParser =
    oneOf
        [ lazy (\_ -> function1Parser)
        , lazy (\_ -> function2Parser)
        , lazy (\_ -> infixParser)
        ]


function1Parser : Parser Function
function1Parser =
    oneOf
        [ (succeed Sin |. command "sin")
        , (succeed Cos |. command "cos")
        , (succeed Tan |. command "tan")
        , (succeed Tan |. symbol "tan")
        ]
        |= lazy (\_ -> expr)


function2Parser : Parser Function
function2Parser =
    oneOf
        [ (succeed Frac |. command "frac") ]
        |= lazy (\_ -> arg expr)
        |= lazy (\_ -> arg expr)


infixParser : Parser Function
infixParser =
    inContext "infix" <|
        delayedCommitMap Add myInt <|
            (symbol "+"
                |= lazy (\_ -> expr)
            )



--delayedCommitMap Add (lazy (\_ -> expr)) <|
--(succeed identity
--|. symbol "+"
--|= lazy (\_ -> expr)
--)


myInt =
    Parser.map MyInt int


command : String -> Parser ()
command name =
    inContext "command" <|
        delayedCommit (symbol "\\") <|
            keyword name


arg : Parser a -> Parser a
arg parser =
    inContext "argument" <|
        succeed identity
            |. symbol "{"
            |= parser
            |. symbol "}"
