module UnsafeUniforms exposing (UnsafeUniforms, UniformParam(..), uniformShaderDeclaration, toUnsafeUniforms)

import Native.UnsafeUniforms
import Json.Encode exposing (Value)
import Math.Vector2 exposing (Vec2)
import Math.Vector3 exposing (Vec3)
import Math.Vector4 exposing (Vec4)
import Dict exposing (Dict)
import String


type alias UnsafeUniforms =
    Value


type UniformParam
    = FloatParam Float
    | Vec2Param Vec2
    | Vec3Param Vec3
    | Vec4Param Vec4


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
    in
        Dict.toList params
            |> List.map
                (\( name, val ) ->
                    "uniform " ++ glslType val ++ " " ++ name ++ ";"
                )
            |> String.join "\n"


toUnsafeUniforms : Dict String UniformParam -> UnsafeUniforms
toUnsafeUniforms params =
    Dict.map (\_ param -> encodeParam param) params
        |> Dict.toList
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
