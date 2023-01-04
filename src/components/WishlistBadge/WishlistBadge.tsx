import { memo, useContext } from "react";
import styles from "./styles.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { WishlistContext } from "context/wishlist/WishlistContext";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";

const WishlistBadge = () => {
  const { countWishlist } = useContext(WishlistContext);
  const { t } = useTranslation();

  return (
    <Tooltip title={t("Wishlist")}>
      <IconButton className={styles.wishlist_badge}>
        <Badge
          badgeContent={countWishlist()}
          color="primary"
          className={styles.wishlist_items_number}
        >
          <FavoriteIcon className={styles.wishlist_icon} />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

export default memo(WishlistBadge);
