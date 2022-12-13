import styles from "./styles.module.css";
import { Box, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useContext,  useState } from "react";
import {PaymentMathodEnym} from "context/cart/CartProvider";
import { CartContext } from "context/cart/CartContext";

const CheckoutPaymentMethod = () => {
  const { cartState } = useContext(CartContext);
  const [value, setValue] = useState<string>(cartState.paymentMethod);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (   
    <Box>
      <InputLabel id="search-category-label">Category</InputLabel>
        <Select
          className={styles.checkoutPaymentMethod}
          labelId="search-category-label"
          id="search-category-select"
          value={value}
          label="Category"
          onChange={handleChange}
        >
          {PaymentMathodEnym.map(x => <MenuItem value={x} key={x}>{x}</MenuItem>)}
        </Select>
    </Box>
  );
  
};

export default CheckoutPaymentMethod;