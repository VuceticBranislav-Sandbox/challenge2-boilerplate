import { Box, Typography } from "@mui/material";
import { ICartItem } from "interfaces";
import styles from "./styles.module.css";

interface ICheckOutProps extends ICartItem {
  removeHandler: (id: number) => void;
}

const CheckOutItem = ({
  id,
  title,
  price,
  quantity,
  image,
  removeHandler,
}: ICheckOutProps) => {
  return (
    <Box className={styles.checkOutItem}>
      <img className={styles.checkOutItem_image} src={image} alt={title} />
      <Box className={styles.checkOutItem_info}>
        <Typography fontSize={"small"} className={styles.checkOutItem_title}>
          {title}
        </Typography>
        <Typography fontSize={"small"} className={styles.checkOutItem_priceInfo}>
          ${price} x {quantity}
        </Typography>
      </Box>
      <Box />
      <Typography> ${(price * quantity).toFixed(2)}</Typography>
    </Box>
  );
};

export default CheckOutItem;
