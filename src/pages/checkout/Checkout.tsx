import { useContext, useState } from "react";
import { AppLayout } from "components/Layouts";
import Headline from "components/Headline";
import styles from "./styles.module.css";
import { CartContext } from "context/cart/CartContext";
import CartItem from "./components/CheckOutItem";
import CartTotals from "./components/CheckOutTotals";
import Button from "components/Button";
import Backdrop from "@mui/material/Backdrop";
import CheckoutPaymentMethod from "./components/CheckoutPaymentMethod";

const Checkout = () => {
  const { cartState, removeCartItem } = useContext(CartContext);
  const { items } = cartState;
  
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <AppLayout>
      <Headline title="Checkout" />
      <div className={styles.checkoutPage}>
        <div className={styles.checkoutItems}>
          {items.map( item => <CartItem
                  key={item.id}
                  {...item}
                  removeHandler={removeCartItem}
                />)}
        </div>
        <div className={styles.checkoutTotalWrapp}>
          <CartTotals />
          <CheckoutPaymentMethod />
          <Button onClick={handleToggle}>Checkout</Button>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            Well done. Spent ${cartState.total} using {cartState.paymentMethod}
          </Backdrop>
        </div>
      </div>
    </AppLayout>
  );
};

export default Checkout;
