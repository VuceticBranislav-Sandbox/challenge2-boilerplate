import { memo, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "context/cart/CartContext";
import { Badge, IconButton } from "@mui/material";

const CarBadge = () => {
  const { getCount } = useContext(CartContext);

  return (
    <Link to={"/cart"}>
      <IconButton className={styles.cart_badge}>
        <Badge
          badgeContent={getCount()}
          color="primary"
          className={styles.wishlist_items_number}
        >
          <ShoppingCartIcon className={styles.cart_icon} />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default memo(CarBadge);
