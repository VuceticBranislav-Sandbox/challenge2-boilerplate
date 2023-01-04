import IconButton from "@mui/material/IconButton";
import styles from "./styles.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "context/cart/CartContext";
import { ICartItem } from "interfaces";
import { useTranslation } from "react-i18next";
import { Tooltip } from "@mui/material";

const CartButton = ({ item, amount }: { item: ICartItem; amount: number }) => {
  const { addToCart } = useContext(CartContext);
  const { t } = useTranslation();

  const handleOnChange = () => {
    addToCart(item, amount);
  };

  return (
    <Tooltip title={t("Add to cart")}>
      <IconButton
        className={styles.productDetailsCart}
        onClick={handleOnChange}
      >
        <ShoppingCartIcon />
      </IconButton>
    </Tooltip>
  );
};

export default CartButton;
