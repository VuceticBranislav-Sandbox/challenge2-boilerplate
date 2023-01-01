import styles from "./styles.module.css";
import { useState } from "react";
import { ICartItem } from "interfaces";
import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import CartButton from "./components/CartButton";

const ProductDetailsCart = ({ item }: { item: ICartItem }) => {
  const [amount, setAmount] = useState(item.quantity);

  const list = Array.from(Array(10).keys()).slice(1);

  const handleChange = (event: SelectChangeEvent) => {
    setAmount(parseInt(event.target.value));
  };

  return (
    <Box className={styles.productDetailsCart}>
      <CartButton item={item} amount={amount} />

      <Select
        className={styles.productDetailsCart_button}
        value={amount.toString()}
        onChange={handleChange}
      >
        {list.map((x) => (
          <MenuItem
            value={x}
            key={x}
            className={styles.productDetailsCart_menuItem}
          >
            {x}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default ProductDetailsCart;
