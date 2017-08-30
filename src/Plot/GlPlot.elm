module Plot.GlPlot exposing (..)

import Html exposing (Html)
import Html.Attributes exposing (width, height, style)
import Dict exposing (Dict)
import WebGL exposing (Mesh, Shader)
import UnsafeUniforms
import Math.Matrix4 as Mat4 exposing (Mat4)
import Math.Vector3 as Vec3 exposing (Vec3, vec3)
import Color
import MathTree exposing (Expr(..))
import Plot.Util exposing (toVec3)
import List.Extra


--inequality : Expr -> Dict String Float -> Html msg


inequality expr variables scope =
    Html.div [ style [ ( "white-space", "pre" ) ] ]
        --[ Html.text <| fragmentShader expr
        [ WebGL.toHtmlWith [ WebGL.standardDerivatives ]
            [ width 800
            , height 800
            , style [ ( "display", "block" ) ]
            ]
            [ WebGL.entity vertexShader
                (WebGL.unsafeShader (implicitCurveShader expr (translationDict variables)))
                fullScreenQuad
                (uniforms scope)
            ]
        ]


type alias Attributes =
    { position : Vec3
    }


type alias Uniforms =
    { transform : Mat4
    , color : Vec3
    , slot1 : Float
    , slot2 : Float
    , slot3 : Float
    , slot4 : Float
    }


type alias Varying =
    { worldPosition : Vec3
    }



--uniforms : Uniforms


uniforms scope =
    { transform =
        Mat4.mul
            (Mat4.makePerspective 60 1 0.1 100)
            (Mat4.makeLookAt (vec3 0 0 2) (vec3 0 0 0) (vec3 0 1 0))
    , color = toVec3 Color.blue
    , slot1 = (scopeVal scope 0)
    , slot2 = (scopeVal scope 1)
    , slot3 = (scopeVal scope 2)
    , slot4 = (scopeVal scope 3)
    }


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


vertexShader : Shader Attributes Uniforms Varying
vertexShader =
    [glsl|
    attribute vec3 position;

    varying vec3 worldPosition;

    uniform mat4 transform;

    void main () {
        gl_Position = transform * vec4(position, 1.0);
        worldPosition = position;
    }
    |]



--fragmentShader : Expr -> Shader {} Uniforms Varying
--fragmentShader : Expr -> Dict String Float -> String
--fragmentShader expr scope =
--"""
--precision highp float;
--uniform vec3 color;
--varying vec3 worldPosition;
--"""
--++ toGlFunc expr scope
--++ """
--void main() {
--gl_FragColor = vec4(smoothstep(1.01, .99, f(worldPosition.x, worldPosition.y) ) * color, 1.0);
--}



--"""


implicitCurveShader : Expr -> Dict String String -> String
implicitCurveShader expr uniformsDict =
    """
        #extension GL_OES_standard_derivatives : enable
        precision highp float;

        uniform vec3 color;

        varying vec3 worldPosition;

        float threshold = 0.0;

        """
        ++ uniformSlots
        ++ toGlFunc expr uniformsDict
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


uniformSlots =
    """
    uniform float slot1;
    uniform float slot2;
    uniform float slot3;
    uniform float slot4;
    """



--toGlFunc : Expr -> String


toGlFunc expr uniformNames =
    """
    float f(in float x, in float y) {
        return """
        ++ toGlExpr expr uniformNames
        ++ """;
        }
        """


toGlExpr : Expr -> Dict String String -> String
toGlExpr expr uniformNames =
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
                case Dict.get name uniformNames of
                    Just translated ->
                        translated

                    Nothing ->
                        name

            Equals exprA exprB ->
                "(" ++ (toGlExpr exprA uniformNames) ++ "-" ++ (toGlExpr exprB uniformNames) ++ ")"

            Func1 name expr ->
                let
                    val =
                        toGlExpr expr uniformNames
                in
                    case name of
                        "negative" ->
                            "(-" ++ val ++ ")"

                        _ ->
                            name ++ "(" ++ val ++ ")"

            Func2 name exprA exprB ->
                let
                    a =
                        toGlExpr exprA uniformNames

                    b =
                        toGlExpr exprB uniformNames
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
