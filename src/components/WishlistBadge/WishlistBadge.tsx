import { memo, useContext } from "react";
import styles from "./styles.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { WishlistContext } from "context/wishlist/WishlistContext";
import { Badge, IconButton } from "@mui/material";

const WishlistBadge = () => {
  const { countWishlist } = useContext(WishlistContext);

  return (
    <IconButton className={styles.wishlist_badge}>
      <Badge
        badgeContent={countWishlist()}
        color="primary"
        className={styles.wishlist_items_number}
      >
        <FavoriteIcon className={styles.wishlist_icon} />
      </Badge>
    </IconButton>
  );
};

export default memo(WishlistBadge);
