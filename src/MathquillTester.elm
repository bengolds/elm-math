module MathquillTester exposing (..)

import Html exposing (Html, div, text, button, input)
import Html.Keyed
import Html.Events exposing (onClick, onInput)
import Html.Attributes exposing (id, class, placeholder)
import Mathquill exposing (..)
import Array exposing (Array)


main =
    Html.program
        { init = init
        , update = update
        , view = view
        , subscriptions = always Sub.none
        }


type alias Model =
    { textValue : String
    , sblt : Bool
    , rmb : Bool
    , sswne : Bool
    , ssro : Bool
    , asn : Bool
    , lricg : NavigationDirection
    , ctbooss : String
    , autocmds : String
    , autoops : String
    }


init : ( Model, Cmd Msg )
init =
    ( Model "" False False False False False Default "" "" ""
    , Cmd.none
    )



-- UPDATE


type Msg
    = QuillEdited String
    | SwitchSBLT
    | SwitchRMB
    | SwitchSSWNE
    | SwitchSSRO
    | SwitchASN
    | SwitchLRICG
    | UpdateCTBOOSS String
    | UpdateAutoCmds String
    | UpdateAutoOps String
    | MoveOutOf Direction
    | DeleteOutOf Direction
    | SelectOutOf Direction
    | UpOutOf
    | DownOutOf


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        QuillEdited value ->
            ( { model | textValue = value }, Cmd.none )

        SwitchSBLT ->
            ( { model | sblt = not model.sblt }, Cmd.none )

        SwitchRMB ->
            ( { model | rmb = not model.rmb }, Cmd.none )

        SwitchSSWNE ->
            ( { model | sswne = not model.sswne }, Cmd.none )

        SwitchSSRO ->
            ( { model | ssro = not model.ssro }, Cmd.none )

        SwitchASN ->
            ( { model | asn = not model.asn }, Cmd.none )

        SwitchLRICG ->
            let
                newValue =
                    case model.lricg of
                        Default ->
                            Up

                        Up ->
                            Down

                        Down ->
                            Default
            in
                ( { model | lricg = newValue }, Cmd.none )

        UpdateCTBOOSS newValue ->
            ( { model | ctbooss = newValue }, Cmd.none )

        UpdateAutoCmds newValue ->
            ( { model | autocmds = newValue }, Cmd.none )

        UpdateAutoOps newValue ->
            ( { model | autoops = newValue }, Cmd.none )

        _ ->
            ( model, Cmd.none )


view : Model -> Html Msg
view model =
    div []
        [ mathField
            [ spaceBehavesLikeTab model.sblt
            , restrictMismatchedBrackets model.rmb
            , sumStartsWithNEquals model.sswne
            , supSubsRequireOperand model.ssro
            , autoSubscriptNumerals model.asn
            , leftRightIntoCmdGoes model.lricg
            , charsThatBreakOutOfSupSub model.ctbooss
            , autoCommands model.autocmds
            , autoOperatorNames model.autoops
            , onMoveOutOf MoveOutOf
            , onDeleteOutOf DeleteOutOf
            , onSelectOutOf SelectOutOf
            , onUpOutOf UpOutOf
            , onDownOutOf DownOutOf
            ]
        , staticMath [] model.textValue
        , button [ onClick SwitchSBLT ] [ text "spaceBehavesLikeTab" ]
        , button [ onClick SwitchRMB ] [ text "restrictMismatchedBrackets" ]
        , button [ onClick SwitchSSWNE ] [ text "sumStartsWithNEquals" ]
        , button [ onClick SwitchSSRO ] [ text "supSubsRequireOperand" ]
        , button [ onClick SwitchASN ] [ text "autoSubscriptNumerals" ]
        , button [ onClick SwitchLRICG ] [ text ("leftRightIntoCmdGoes" ++ (toString model.lricg)) ]
        , input [ onInput UpdateCTBOOSS, placeholder "charsThatBreakOutOfSupSub" ] []
        , input [ onInput UpdateAutoCmds, placeholder "autoCommands" ] []
        , input [ onInput UpdateAutoOps, placeholder "autoOperatorNames" ] []
        ]
