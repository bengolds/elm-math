module Plot.Util exposing (..)

import Math.Matrix4 as Mat4 exposing (Mat4)
import Math.Vector3 as Vec3 exposing (Vec3, vec3)
import Color exposing (Color)


upperLeft : Mat4 -> Mat4
upperLeft matrix =
    let
        m =
            Mat4.toRecord matrix
    in
        Mat4.fromRecord
            { m11 = m.m11
            , m12 = m.m12
            , m13 = m.m13
            , m21 = m.m21
            , m22 = m.m22
            , m23 = m.m23
            , m31 = m.m31
            , m32 = m.m32
            , m33 = m.m33
            , m41 = 0
            , m42 = 0
            , m43 = 0
            , m44 = 1
            , m14 = 0
            , m24 = 0
            , m34 = 0
            }


normalMatrix : Mat4 -> Mat4
normalMatrix mat =
    mat
        |> upperLeft
        |> Mat4.inverse
        |> Maybe.withDefault Mat4.identity
        |> Mat4.transpose


toVec3 : Color -> Vec3
toVec3 color =
    let
        { red, green, blue } =
            Color.toRgb color

        normalize n =
            toFloat n / 255

        ( redFloat, greenFloat, blueFloat ) =
            ( normalize red, normalize green, normalize blue )
    in
        vec3 redFloat greenFloat blueFloat
