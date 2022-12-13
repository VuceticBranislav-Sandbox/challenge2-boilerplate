import { ICartItem } from "interfaces";
import styles from "./styles.module.css";

interface ICartProps extends ICartItem {
  removeHandler: (id: number) => void;
}

const CartItem = ({
  id,
  title,
  price,
  quantity,
  image,
  removeHandler,
}: ICartProps) => {
  
  return (
    <div className={styles.checkOutItem}>
      <img className={styles.checkOutItem_image} src={image} alt={title} />
      <div className={styles.checkOutItem_info}>
        <p className={styles.checkOutItem_title}>{title}</p>
        <span className={styles.checkOutItem_priceInfo}>
          ${price} x {quantity}
        </span>
      </div>
      <div>sum: ${(price * quantity).toFixed(2)}</div>
    </div>
  );
};

export default CartItem;
