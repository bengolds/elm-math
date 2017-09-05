module UnsafeUniforms exposing (UnsafeUniforms, UniformParam(..), uniformShaderDeclaration, toUnsafeUniforms, sanitize)

import Native.UnsafeUniforms
import Json.Encode exposing (Value)
import Math.Vector2 exposing (Vec2)
import Math.Vector3 exposing (Vec3)
import Math.Vector4 exposing (Vec4)
import Math.Matrix4 exposing (Mat4)
import Dict exposing (Dict)
import String
import Regex
import GreekLetters exposing (greek, isNonRoman, symbols, toNameFromString)


type alias UnsafeUniforms =
    Value


type UniformParam
    = FloatParam Float
    | Vec2Param Vec2
    | Vec3Param Vec3
    | Vec4Param Vec4
    | Mat4Param Mat4


uniformShaderDeclaration : Dict String UniformParam -> String
uniformShaderDeclaration params =
    let
        glslType param =
            case param of
                FloatParam _ ->
                    "float"

                Vec2Param _ ->
                    "vec2"

                Vec3Param _ ->
                    "vec3"

                Vec4Param _ ->
                    "vec4"

                Mat4Param _ ->
                    "mat4"
    in
        params
            |> Dict.toList
            |> List.map
                (\( name, val ) ->
                    "uniform " ++ glslType val ++ " " ++ sanitize name ++ ";"
                )
            |> String.join "\n"


toUnsafeUniforms : Dict String UniformParam -> UnsafeUniforms
toUnsafeUniforms params =
    params
        |> Dict.toList
        |> List.map (\( name, param ) -> ( sanitize name, encodeParam param ))
        |> Json.Encode.object


encodeParam : UniformParam -> Value
encodeParam param =
    case param of
        FloatParam val ->
            Json.Encode.float val

        Vec2Param val ->
            Native.UnsafeUniforms.encodeVec2 (val)

        Vec3Param val ->
            Native.UnsafeUniforms.encodeVec3 (val)

        Vec4Param val ->
            Native.UnsafeUniforms.encodeVec4 (val)

        Mat4Param val ->
            Native.UnsafeUniforms.encodeMat4 (val)


sanitize : String -> String
sanitize name =
    let
        greekLetters =
            greek
                |> symbols
                |> String.fromList

        regex =
            Regex.regex ("[" ++ greekLetters ++ "]")
    in
        Regex.replace Regex.All
            regex
            (\match ->
                let
                    replacement =
                        Maybe.withDefault "unknown" (toNameFromString match.match)
                in
                    "greek_" ++ replacement ++ "_"
            )
            name
