import { IProduct, IWishlistData } from "interfaces";

type WishlistAction =
  | { type: "addToWishlist"; payload: IProduct }
  | { type: "removeFavoriteItem"; payload: number }
  | { type: "countWishlist"; payload: number };

export const wishlistReducer = (
  state: IWishlistData,
  action: WishlistAction
): IWishlistData => {
  switch (action.type) {
    case "addToWishlist": {
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    }

    case "removeFavoriteItem": {
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
};
