import { useContext } from "react";
import { AppLayout } from "components/Layouts";
import Headline from "components/Headline";
import styles from "./styles.module.css";
import { CartContext } from "context/cart/CartContext";
import CartItem from "./components/CartItem";
import CartTotals from "./components/CartTotals";
import { Box } from "@mui/material";
import CheckoutButton from "./components/CheckoutButton";

const CartView = () => {
  const { cartState, removeCartItem } = useContext(CartContext);
  const { items } = cartState;

  return (
    <AppLayout>
      <Headline title="Cart" />
      <Box className={styles.cartPage}>
        <Box className={styles.cartItems}>
          {items.map((item) => (
            <CartItem key={item.id} {...item} removeHandler={removeCartItem} />
          ))}
        </Box>
        <Box className={styles.cartTotalWrapp}>
          <CartTotals />
          <CheckoutButton /> 
        </Box>
      </Box>
    </AppLayout>
  );
};

export default CartView;
