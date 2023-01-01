import { Button } from "@mui/material";
import styles from "./styles.module.css";
import { useContext } from "react";
import { CartContext } from "context/cart/CartContext";

const CheckoutButton = () => {
  const { cartState } = useContext(CartContext);
  const { items } = cartState;

  return (
    <Button
      variant="contained"
      disabled={items.length === 0}
      href="/#/checkout"
      className={styles.checkoutButton}
    >
      Proceed to Checkout
    </Button>
  );
};

export default CheckoutButton;
