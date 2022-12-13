
import { CartContext } from "context/cart/CartContext";
import { memo, useContext } from "react";
import styles from "./styles.module.css";

const CartTotals = () => {
  const {cartState} = useContext(CartContext);
  
  return (
    <div className={styles.checkOutTotal}>
      <div className={styles.checkOut_content}>
        <h4>Cart totals</h4>
        <table>
          <thead>
            <tr>
              <th className={styles.checkOut_title}>SUBTOTAL</th>
              <th>${cartState.amount.toFixed(2)}</th>
            </tr>
          </thead>
          <tbody className={styles.table_body}>
            <tr>
              <td className={styles.title_head}>Shipping</td>
              <td className={styles.table_value}>${cartState.shipping.toFixed(2)}</td>
            </tr>
            <tr>
              <td className={styles.title_head}>Flat rate:</td>
              <td className={styles.table_value}>${cartState.flatRate.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <table>
        <tfoot>
          <tr>
            <th className={styles.title_head}>TOTAL</th>
            <th>${cartState.total.toFixed(2)}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default memo(CartTotals);
