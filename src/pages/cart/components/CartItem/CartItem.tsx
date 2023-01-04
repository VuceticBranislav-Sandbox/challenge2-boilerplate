import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import QuantityButton from "components/QuantityButton/QuantityButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ICartItem } from "interfaces";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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
      <Tooltip title={t("Remove")}>
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
      </Tooltip>
    </Box>
  );
};

export default CartItem;
