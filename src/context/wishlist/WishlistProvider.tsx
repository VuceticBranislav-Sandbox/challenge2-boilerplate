import { useEffect, useReducer } from "react";
import { WishlistContext } from "./WishlistContext";
import { wishlistReducer } from "./WishlistReducer";
import { IProduct, IProps, IWishlistData } from "interfaces";
import getLocalStorage from "utils/localStorage";

export type WishlistContextProps = {
  wishlistState: IWishlistData;
  addToWishlist: (item: IProduct) => void;
  countWishlist: () => number;
  inWishlist: (id: number) => boolean;
};

const INITIAL_STATE: IWishlistData = {
  wishlist: getLocalStorage("wishlistStorage"),
};

export const WishlistProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(wishlistReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("wishlistStorage", JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  const addToWishlist = (product: IProduct) => {
    const item = findProduct(product.id);
    if (item) {
      dispatch({
        type: "removeFavoriteItem",
        payload: product.id,
      });
    } else {
      dispatch({
        type: "addToWishlist",
        payload: product,
      });
    }
  };

  const countWishlist = () => {
    return state.wishlist.length;
  };

  const findProduct = (id: number) => {
    return state.wishlist.find((pr) => pr.id === id);
  };

  const inWishlist = (id: number) => {
    return findProduct(id) !== undefined;
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistState: state,
        addToWishlist,
        countWishlist,
        inWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
