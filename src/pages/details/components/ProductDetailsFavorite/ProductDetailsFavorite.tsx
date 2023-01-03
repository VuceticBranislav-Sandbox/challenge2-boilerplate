import styles from "./styles.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import { WishlistContext } from "context/wishlist/WishlistContext";
import { IProduct } from "interfaces";

const ProductDetailsFavorite = ({ product }: { product: IProduct }) => {
  const { addToWishlist, inWishlist } = useContext(WishlistContext);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    addToWishlist(product);
    event.stopPropagation();
  };

  const color = inWishlist(product.id) ? "red" : "default";

  return (
    <IconButton
      onClick={handleClick}
      size="small"
      sx={{
        color: { color },
      }}
      className={styles.productDetailsFavorite}
    >
      <FavoriteIcon fontSize="small" />
    </IconButton>
  );
};

export default ProductDetailsFavorite;
