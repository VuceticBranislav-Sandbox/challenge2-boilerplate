import { Button } from "@mui/material";
import styles from "./styles.module.css";
import { FunctionComponent, useContext } from "react";
import { CartContext } from "context/cart/CartContext";

interface IProps {
  onClickEvent: (event: React.MouseEvent<HTMLElement>) => void;
}

const CheckoutButton: FunctionComponent<IProps> = ({ onClickEvent }) => {
  const { cartState } = useContext(CartContext);
  const { items } = cartState;

  return (
    <Button
      variant="contained"
      disabled={items.length === 0}
      className={styles.checkoutButton}
      onClick={onClickEvent}
    >
      Proceed to Checkout
    </Button>
  );
};

export default CheckoutButton;
