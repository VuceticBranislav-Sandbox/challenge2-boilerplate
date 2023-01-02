import { CartState } from "./CartProvider";
import { ICartItem } from "interfaces";

type CartAction =
  | { type: "getAll"; payload: ICartItem[] }
  | { type: "addToCart"; payload: ICartItem }
  | { type: "removeFromCart"; payload: number }
  | { type: "clearCart" }
  | { type: "updateQuantity"; payload: ICartItem[] }
  | { type: "amountUpdate" }
  | { type: "updateQuantityAdv"; payload: ICartItem[] };

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "getAll":
      return {
        ...state,
        items: [...state.items],
      };

    case "addToCart":
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case "removeFromCart":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "updateQuantity":
      return {
        ...state,
        items: action.payload,
      };

    case "clearCart":
      return {
        ...state,
        items: [],
      };

    case "amountUpdate":
      const total = state.items
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2);
      const flatRate = (Number(total) * state.tax) / 100;
      const shipping = state.items.length * state.shippingPrice;
      const totalPrice = shipping + flatRate + Number(total);
      return {
        ...state,
        amount: Number(total),
        shipping: shipping,
        flatRate: flatRate,
        total: totalPrice,
      };

    case "updateQuantityAdv":
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};
