import { Box, IconButton, Typography } from "@mui/material";
import { CartContext } from "context/cart/CartContext";
import { FC, useContext } from "react";
import styles from "./styles.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface IProps {
  id: number;
  quantity: number;
  cb?: (operation: "plus" | "minus") => void;
}

const QuantityButton: FC<IProps> = ({ id, quantity = 1, cb }) => {
  const { updateQuantity } = useContext(CartContext);

  const onClickHandler = (operation: "plus" | "minus") => {
    updateQuantity(id, operation);
    cb && cb(operation);
  };

  return (
    <Box className={styles.quantity}>
      <IconButton
        aria-label="Remove"
        size="small"
        onClick={() => onClickHandler("minus")}
      >
        <RemoveIcon className={styles.quantity_button} fontSize="small" />
      </IconButton>

      <Typography fontSize={"small"} className={styles.quantity_label}>
        {quantity}
      </Typography>

      <IconButton
        aria-label="Add"
        size="small"
        onClick={() => onClickHandler("plus")}
      >
        <AddIcon className={styles.quantity_button} fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default QuantityButton;
