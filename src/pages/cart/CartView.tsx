import { useContext } from "react";
import { AppLayout } from "components/Layouts";
import Headline from "components/Headline";
import styles from "./styles.module.css";
import { CartContext } from "context/cart/CartContext";
import CartItem from "./components/CartItem";
import CartTotals from "./components/CartTotals";
import Button from "components/Button";
import { Link } from "react-router-dom";

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
          
          <Link to={"/checkout"}>
            <Button className={styles.proceedBtn}>Proceed to Checkout</Button>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export default CartView;
