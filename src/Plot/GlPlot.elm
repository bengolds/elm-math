module Plot.GlPlot exposing (..)

import Element exposing (el, html, Element)
import Html.Attributes
import Dict exposing (Dict)
import WebGL exposing (Mesh, Shader)
import UnsafeUniforms exposing (UniformParam(..))
import Math.Vector3 as Vec3 exposing (Vec3, vec3)
import Math.Matrix4 as Mat4 exposing (Mat4)
import MathTree exposing (Expr(..))
import List.Extra


--inequality : Expr -> Dict String Float -> Html msg


inequality : FragmentShader -> Dict String UniformParam -> Element styles variation msg
inequality fragShader scope =
    --Html.div [ style [ ( "white-space", "pre" ) ] ]
    html <|
        WebGL.toHtmlWith [ WebGL.standardDerivatives ]
            [ Html.Attributes.style
                [ ( "height", "100%" )
                , ( "width", "100%" )
                ]
            ]
            [ WebGL.entity vertexShader
                fragShader
                fullScreenQuad
                (UnsafeUniforms.toUnsafeUniforms scope)
            ]



--]


type alias Attributes =
    { position : Vec3
    }


type alias Uniforms =
    UnsafeUniforms.UnsafeUniforms


type alias Varying =
    { worldPosition : Vec3
    }


type alias FragmentShader =
    Shader {} Uniforms Varying


scopeVal scope n =
    Dict.toList scope
        |> List.sort
        |> List.Extra.getAt n
        |> Maybe.map Tuple.second
        |> Maybe.withDefault 0


translationDict : List String -> Dict String String
translationDict variables =
    variables
        |> List.sort
        |> List.indexedMap
            (\n name ->
                ( name, "slot" ++ (toString (n + 1)) )
            )
        |> Dict.fromList


fullScreenQuad : Mesh Attributes
fullScreenQuad =
    List.map Attributes
        [ vec3 -1 1 0
        , vec3 1 1 0
        , vec3 -1 -1 0
        , vec3 1 -1 0
        ]
        |> WebGL.triangleStrip


cameraMatrix : Mat4
cameraMatrix =
    Mat4.mul
        (Mat4.makeOrtho -1 1 -1 1 -1 1)
        (Mat4.makeLookAt (vec3 0 0 1) (vec3 0 0 0) (vec3 0 1 0))


vertexShader : Shader Attributes Uniforms Varying
vertexShader =
    WebGL.unsafeShader <|
        """
    attribute vec3 position;

    varying vec3 worldPosition;

    uniform mat4 transform;

    void main () {
        gl_Position = transform * vec4(position, 1.0);
        worldPosition = position;
    }
    """


emptyShader : Shader {} Uniforms Varying
emptyShader =
    [glsl|
    precision highp float;
    varying vec3 worldPosition;
    void main () {
        gl_FragColor = vec4(0,0,0,0);
    }
    |]


fragmentShader : Expr -> Dict String UniformParam -> FragmentShader
fragmentShader expr uniformsDict =
    WebGL.unsafeShader <|
        """
        #extension GL_OES_standard_derivatives : enable
        precision highp float;

        varying vec3 worldPosition;

        float threshold = 0.0;

        """
            ++ UnsafeUniforms.uniformShaderDeclaration uniformsDict
            ++ toGlFunc expr
            ++ """

        void main() {
            float val = f(worldPosition.x, worldPosition.y);
            float isoValue = 0.0;
            float pxDistance = abs(isoValue-val)/fwidth(val);
            float lineWidth=2.0;

            float opacity = 1.0-smoothstep(lineWidth-1.0, lineWidth+1.0, pxDistance);
            gl_FragColor = vec4(opacity*color, 1.0);

        }
        """



--toGlFunc : Expr -> String


toGlFunc expr =
    """
    float f(in float x, in float y) {
        return """
        ++ toGlExpr expr
        ++ """;
        }
        """


toGlExpr : Expr -> String
toGlExpr expr =
    let
        withOneDec : Float -> String
        withOneDec val =
            if (val - toFloat (floor val)) < 0.00001 then
                toString (floor val) ++ ".0"
            else
                toString val
    in
        case expr of
            Real val ->
                withOneDec val

            Rational val ->
                withOneDec val

            Integer val ->
                withOneDec <| toFloat val

            Variable name ->
                UnsafeUniforms.sanitize name

            Equals exprA exprB ->
                "(" ++ (toGlExpr exprA) ++ "-" ++ (toGlExpr exprB) ++ ")"

            Func1 name expr ->
                let
                    val =
                        toGlExpr expr
                in
                    case name of
                        "negative" ->
                            "(-" ++ val ++ ")"

                        _ ->
                            name ++ "(" ++ val ++ ")"

            Func2 name exprA exprB ->
                let
                    a =
                        toGlExpr exprA

                    b =
                        toGlExpr exprB
                in
                    "("
                        ++ (case name of
                                "plus" ->
                                    a ++ "+" ++ b

                                "minus" ->
                                    a ++ "-" ++ b

                                "times" ->
                                    a ++ "*" ++ b

                                "dot" ->
                                    a ++ "*" ++ b

                                "frac" ->
                                    a ++ "/" ++ b

                                "exponent" ->
                                    "pow(" ++ a ++ "," ++ b ++ ")"

                                _ ->
                                    "1"
                           )
                        ++ ")"

            _ ->
                "1"
