import { useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer } from "./CartReducer";
import { ICartItem } from "interfaces";

export type PaymentMathodType = "cash_delivery" | "bank_transfer" | "paypal";
export const PaymentMathodEnym = ["cash_delivery", "bank_transfer", "paypal"];

export interface CartState {
  items: ICartItem[];
  tax: number;
  shippingPrice: number;
  amount: number;
  paymentMethod: PaymentMathodType;
  flatRate: number;
  shipping : number;
  total: number;
}

export type CartContextProps = {
  cartState: CartState;
  addToCart: (item: ICartItem, amount: number) => void;
  removeCartItem: (id: number) => void;
  updateQuantity: (id: number, type: "plus" | "minus") => void;
  updateQuantityAdv: (id: number, amount: number) => void;
  getCount: () => number;
};

const INITIAL_STATE: CartState = {
  items: [],
  tax: 20,
  shippingPrice: 5,
  amount: 0,
  paymentMethod: "cash_delivery",
  flatRate: 0,
  shipping : 0,
  total: 0
};

interface props {
  children: JSX.Element;
}

export const CartProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const addToCart = (item: ICartItem, amount: number) => {
    const product = state.items.find((pr) => pr.id === item.id);
    if (product) {      
      updateQuantityAdv(item.id, amount);
    } 
    else {
      dispatch({
        type: "addToCart",
        payload: {...item, quantity: amount},
      });     
      updateAmount();       
    }    
  };

  const removeCartItem = (id: number) => {
    dispatch({ type: "removeFromCart", payload: id });
    updateAmount();
  };
  
  const updateQuantity = (id: number, type: "plus" | "minus") => {
    if(state.items.length === 0) return;
    const index = state.items.findIndex((item) => item.id === id);

    if (type === "plus" && state.items[index].quantity < 9) {
      state.items[index].quantity = state.items[index].quantity + 1;
    }
    if (type === "minus" && state.items[index].quantity > 1) {
      state.items[index].quantity = state.items[index].quantity - 1;
    }
    dispatch({ type: "updateQuantity", payload: state.items });
    updateAmount();
  };

  const updateQuantityAdv = (id: number, amount: number) => {   
    if(state.items.length === 0) return;
    const index = state.items.findIndex((item) => item.id === id);
    
    if (state.items[index].quantity + amount < 10) {
      state.items[index].quantity = state.items[index].quantity + amount;
    }
    else {state.items[index].quantity = 9 }

    dispatch({ type: "updateQuantityAdv", payload: state.items });
    updateAmount();
  };

  const updateAmount = () => {
    dispatch({ type: "amountUpdate" });
  };

  const getCount = (): number => {
    return state.items.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartState: state,
        addToCart,
        removeCartItem,
        updateQuantity,
        updateQuantityAdv,
        getCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
