module Msg exposing (Msg(..))

import MathModule


type Msg
    = ModuleEdited Int MathModule.Msg
    | AddModule
    | DeleteModule Int
    | PinVariable String
    | UnpinVariable String
    | SliderChanged String Float
    | Noop
