module Type.Matrix exposing (..)


type alias Matrix =
    { elements : String
    , toString : String
    , rowDimension : Dimension
    , colDimension : Dimension
    }


type Dimension
    = Fixed Int
    | Bound String
    | Free



--type alias Addable a =
--{ a | plus : a -> a -> a }
--type alias Multipliable a =
--{ a | times : a -> a -> a }
--natural : Addable (Multipliable {val: Integer})
--natural =
--{
--}
