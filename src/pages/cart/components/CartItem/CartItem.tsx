import { Box, IconButton, Typography } from "@mui/material";
import QuantityButton from "components/QuantityButton/QuantityButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
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
    <Box className={styles.cartItem}>
      <img className={styles.cartItem_image} src={image} alt={title} />
      <Box className={styles.cartItem_info}>
        <Typography fontSize={"small"} className={styles.cartItem_title}>
          {title}
        </Typography>
        <Typography fontSize={"small"} className={styles.cartItem_priceInfo}>
          ${price} x {quantity}
        </Typography>
      </Box>
      <QuantityButton quantity={quantity} id={id} />
      <Typography> ${(price * quantity).toFixed(2)}</Typography>
      <IconButton
        aria-label="delete"
        size="small"
        onClick={() => removeHandler(id)}
      >
        <DeleteForeverIcon
          className={styles.cartItem_remove}
          fontSize="small"
        />
      </IconButton>
    </Box>
  );
};

export default CartItem;
