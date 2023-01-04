import styles from "./styles.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton, Tooltip } from "@mui/material";
import { useContext } from "react";
import { WishlistContext } from "context/wishlist/WishlistContext";
import { IProduct } from "interfaces";
import { useTranslation } from "react-i18next";

const ProductDetailsFavorite = ({ product }: { product: IProduct }) => {
  const { addToWishlist, inWishlist } = useContext(WishlistContext);
  const { t } = useTranslation();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    addToWishlist(product);
    event.stopPropagation();
  };

  const color = inWishlist(product.id) ? "red" : "default";

  return (
    <Tooltip title={t("Add to wishlist")}>
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
    </Tooltip>
  );
};

export default ProductDetailsFavorite;
