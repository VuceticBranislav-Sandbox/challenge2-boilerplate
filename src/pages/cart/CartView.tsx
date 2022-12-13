import { useContext } from "react";
import { AppLayout } from "components/Layouts";
import Headline from "components/Headline";
import styles from "./styles.module.css";
import { CartContext } from "context/cart/CartContext";
import CartItem from "./components/CartItem";
import CartTotals from "./components/CartTotals";
import Button from "components/Button";

const CartView = () => {
  const { cartState, removeCartItem } = useContext(CartContext);
  const { items } = cartState;
  
  return (
    <AppLayout>
      <Headline title="Cart" />
      <div className={styles.cartPage}>
        <div className={styles.cartItems}>
          {items.map( item => <CartItem
                  key={item.id}
                  {...item}
                  removeHandler={removeCartItem}
                />)}
        </div>
        <div className={styles.cartTotalWrapp}>
          <CartTotals />
          <Button className={styles.proceedBtn}>Proceed to Checkout</Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default CartView;
