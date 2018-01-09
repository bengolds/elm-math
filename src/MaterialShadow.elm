module MaterialShadow exposing (e0, e12, e16, e2, e24, e3, e4, e6, e8)

import Color
import Style
import Style.Shadow as Shadow exposing (box)
import Style.Transition as Transition
import Time exposing (second)


--TODO: MAKE SURE THIS WORKS WITH SMOOTH TRANSITIONS


transition =
    Transition.transitions
        [ { delay = 0
          , duration = 0.28 * second
          , easing = "cubic-bezier(0.4, 0, 0.2, 1)"
          , props = [ "box-shadow" ]
          }
        ]



--transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);


alpha2 =
    Color.rgba 0 0 0 0.2


alpha4 =
    Color.rgba 0 0 0 0.4


alpha12 =
    Color.rgba 0 0 0 0.12


alpha14 =
    Color.rgba 0 0 0 0.14


matShadow shadows =
    transition
        :: shadows


e0 =
    matShadow []


e2 =
    matShadow
        [ box { offset = ( 0, 2 ), blur = 2, size = 0, color = alpha14 }
        , box { offset = ( 0, 1 ), blur = 5, size = 0, color = alpha12 }
        , box { offset = ( 0, 3 ), blur = 1, size = -2, color = alpha2 }
        ]


e3 =
    matShadow
        [ box { offset = ( 0, 3 ), blur = 4, size = 0, color = alpha14 }
        , box { offset = ( 0, 1 ), blur = 8, size = 0, color = alpha12 }
        , box { offset = ( 0, 3 ), blur = 3, size = -2, color = alpha4 }
        ]


e4 =
    matShadow
        [ box { offset = ( 0, 4 ), blur = 5, size = 0, color = alpha14 }
        , box { offset = ( 0, 1 ), blur = 10, size = 0, color = alpha12 }
        , box { offset = ( 0, 2 ), blur = 4, size = -1, color = alpha4 }
        ]


e6 =
    matShadow
        [ box { offset = ( 0, 6 ), blur = 10, size = 0, color = alpha14 }
        , box { offset = ( 0, 1 ), blur = 18, size = 0, color = alpha12 }
        , box { offset = ( 0, 3 ), blur = 5, size = -1, color = alpha4 }
        ]


e8 =
    matShadow
        [ box { offset = ( 0, 8 ), blur = 10, size = 1, color = alpha14 }
        , box { offset = ( 0, 3 ), blur = 14, size = 2, color = alpha12 }
        , box { offset = ( 0, 5 ), blur = 5, size = -3, color = alpha4 }
        ]


e12 =
    matShadow
        [ box { offset = ( 0, 12 ), blur = 16, size = 1, color = alpha14 }
        , box { offset = ( 0, 4 ), blur = 22, size = 3, color = alpha12 }
        , box { offset = ( 0, 6 ), blur = 7, size = -4, color = alpha4 }
        ]


e16 =
    matShadow
        [ box { offset = ( 0, 16 ), blur = 24, size = 2, color = alpha14 }
        , box { offset = ( 0, 6 ), blur = 30, size = 5, color = alpha12 }
        , box { offset = ( 0, 8 ), blur = 10, size = -5, color = alpha4 }
        ]


e24 =
    matShadow
        [ box { offset = ( 0, 24 ), blur = 38, size = 3, color = alpha14 }
        , box { offset = ( 0, 9 ), blur = 46, size = 8, color = alpha12 }
        , box { offset = ( 0, 11 ), blur = 15, size = -7, color = alpha4 }
        ]
