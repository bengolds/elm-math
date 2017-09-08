module MathViews exposing (mathRow)

import MathModule exposing (MathModule, uniforms)
import GreekLetters exposing (greek, isNonRoman, names)
import Element as El exposing (column, row, wrappedRow, text, el, empty)
import Element.Attributes as Attr exposing (px, percent, fill)
import Element.Events as Events
import Styles exposing (Styles(..))
import Mathquill.StyleElements as Mathquill exposing (staticMath, mathField, onEdit)
import MathTree
import Plot.GlPlot exposing (inequality)
import Msg exposing (Msg(..))


autoCommands : List String
autoCommands =
    [ "sum", "prod" ] ++ (greek |> List.filter isNonRoman |> names)


mathRow : Int -> MathModule -> El.Element Styles variation Msg
mathRow index mathModule =
    row MathRow
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
        , el Plot [ Attr.width (fill 1), Attr.maxWidth (px 480) ] (plot mathModule)
        ]
        |> El.within
            [ row None
                [ Attr.padding 8, Attr.spacing 8, Attr.alignLeft, Attr.alignTop ]
                [ iconButton "close" (DeleteModule index)
                , iconButton "speaker_notes" (Noop)
                ]
            ]


iconButton iconName onClick =
    el IconButton [ Attr.width (px 24), Attr.height (px 24), Events.onClick onClick ] (matIcon iconName None [])


functionSignature mathModule =
    staticMath FunctionName
        []
        ("f("
            ++ (case mathModule.formula of
                    Ok expr ->
                        MathTree.getVariables expr
                            |> String.join ","

                    Err err ->
                        "-"
               )
            ++ ")="
        )


formulaField index =
    mathField FormulaField
        [ Mathquill.autoCommands <| String.join " " autoCommands
        , Mathquill.spaceBehavesLikeTab True
        , Mathquill.onEdit (MathModule.QuillEdited >> ModuleEdited index)
        ]


plot : MathModule -> El.Element style variation msg
plot mathModule =
    case mathModule.formula of
        Ok tree ->
            inequality mathModule.compiledFragmentShader (uniforms mathModule)

        Err err ->
            text "uhoh"


matIcon name style attributes =
    El.node "i" <|
        el style
            (attributes ++ [ Attr.class "material-icons" ])
            (text name)
