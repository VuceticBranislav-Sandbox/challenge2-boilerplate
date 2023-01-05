import { useContext, useEffect } from "react";
import { AppLayout } from "components/Layouts";
import Headline from "components/Headline";
import styles from "./styles.module.css";
import { CartContext } from "context/cart/CartContext";
import CartItem from "./components/CartItem";
import CartTotals from "./components/CartTotals";
import { Box } from "@mui/material";
import CheckoutForm from "pages/checkoutForm";
import { useTranslation } from "react-i18next";

const CartView = () => {
  const { cartState, removeCartItem } = useContext(CartContext);
  const { items } = cartState;
  const { t } = useTranslation();

  useEffect(() => {
    localStorage.setItem("cartStorage", JSON.stringify(items));
  }, [items]);

  return (
    <AppLayout>
      <Headline title={t("Cart")} />
      <Box className={styles.cartPage}>
        <Box className={styles.cartItems}>
          {items.map((item) => (
            <CartItem key={item.id} {...item} removeHandler={removeCartItem} />
          ))}
        </Box>
        <Box className={styles.cartTotalWrapp}>
          <CartTotals />
        </Box>
      </Box>
      <CheckoutForm />
    </AppLayout>
  );
};

export default CartView;
