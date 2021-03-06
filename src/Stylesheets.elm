port module Stylesheets exposing (..)

import Css.File exposing (CssFileStructure, CssCompilerProgram)
import ParserDebuggerCss
import TreeView.TreeViewCss


port files : CssFileStructure -> Cmd msg


fileStructure : CssFileStructure
fileStructure =
    Css.File.toFileStructure
        [ ( "index.css", Css.File.compile [ ParserDebuggerCss.css, TreeViewCss.css ] ) ]


main : CssCompilerProgram
main =
    Css.File.compiler files fileStructure
