import IconButton from "@mui/material/IconButton";
import styles from "./styles.module.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const ProductDetailsCart = () => {
  const [amount, setAmount] = useState(1);
  const [inputAmount, setInputAmount] = useState(1);

  const list = ['1', '2', '5', '10'];

  const handleOnChange = (event: any, newValue: string) => {
    let value = parseInt(newValue);
    if (isNaN(value)) { value = 1; }
    setAmount(value);    
  };  

  const handleOnInputChange = (event: any, newValue: string | null) => {
    let value = parseInt(newValue ?? '1');
    if (isNaN(value)) { value = 1; }
    setInputAmount(value);    
  };  
  
  return (
    <div>
      <IconButton className={styles.productDetailsCart}>
        <ShoppingCartIcon  />
      </IconButton>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        disableClearable = {true}
        value = {amount.toString()}
        options={list.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="Amount" />}
        onChange = {handleOnChange}
        inputValue={inputAmount.toString()}
        onInputChange={handleOnInputChange}
      /> 
    </div>
  );
};

export default ProductDetailsCart;