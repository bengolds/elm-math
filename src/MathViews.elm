module MathViews exposing (mathRow)

import Element as El exposing (column, el, empty, row, text, wrappedRow)
import Element.Attributes as Attr exposing (fill, percent, px)
import Element.Events as Events
import GreekLetters exposing (greek, isNonRoman, names)
import MathModule exposing (MathModule, uniforms)
import MathTree exposing (isImplicitEquation)
import Mathquill.StyleElements as Mathquill exposing (mathField, onEdit, staticMath)
import Msg exposing (Msg(..))
import Plot.GlPlot exposing (inequality)
import Scope exposing (Scope)
import Styles exposing (Styles(..))


autoCommands : List String
autoCommands =
    [ "sum", "prod" ] ++ (greek |> List.filter isNonRoman |> names)



--mathRow : Int -> MathModule -> El.Element Styles variation Msg


mathRow scope index mathModule =
    row Card
        [ Attr.height (px 192), Attr.maxWidth (px 1280), Attr.width (fill 1) ]
        [ el None [ Attr.width (fill 1) ] <|
            el None
                [ Attr.alignLeft, Attr.verticalCenter, Attr.paddingLeft 24 ]
                (row None
                    [ Attr.verticalCenter ]
                    [ functionSignature mathModule
                    , formulaField index
                    ]
                )
        , el Plot [ Attr.width (fill 1), Attr.maxWidth (px 480) ] (plot scope mathModule)
        ]
        |> El.within
            [ row None
                [ Attr.padding 8, Attr.spacing 8, Attr.alignLeft, Attr.alignTop ]
                [ iconButton "close" (DeleteModule index)
                , iconButton "speaker_notes" Noop
                ]
            ]


iconButton iconName onClick =
    el IconButton [ Attr.width (px 24), Attr.height (px 24), Events.onClick onClick ] (matIcon iconName None [])


functionSignature mathModule =
    case mathModule.formula of
        Ok expr ->
            if isImplicitEquation expr then
                empty
            else
                staticMath FunctionName
                    []
                    ("f("
                        ++ (MathTree.getVariables expr
                                |> String.join ","
                           )
                        ++ ")="
                    )

        Err _ ->
            staticMath FunctionName [] "f(-)"


formulaField index =
    mathField FormulaField
        [ Mathquill.autoCommands <| String.join " " autoCommands
        , Mathquill.spaceBehavesLikeTab True
        , Mathquill.onEdit (MathModule.QuillEdited >> ModuleEdited index)
        ]


plot scope mathModule =
    case mathModule.formula of
        Ok tree ->
            inequality mathModule.compiledFragmentShader (uniforms scope mathModule)

        Err err ->
            text "uhoh"


matIcon name style attributes =
    El.node "i" <|
        el style
            (attributes ++ [ Attr.class "material-icons" ])
            (text name)
