import styles from "./styles.module.css";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CartButton from "./components/CartButton";
import { ICartItem } from "interfaces";

const ProductDetailsCart = ({item}: {item: ICartItem}) => {
  const [amount, setAmount] = useState(item.quantity);

  const list = ['1', '3', '6', '9'];

  const handleOnChange = (event: any, newValue: string) => {
    let value = limitValue(parseInt(newValue));    
    setAmount(value);    
  };  

  const handleOnInputChange = (event: any, newValue: string | null) => {
    let value = limitValue(parseInt(newValue ?? '1'));
    setAmount(value);    
  }; 

  const limitValue = (value: number) => {
    if (isNaN(value)) { value = 1; }
    if (value > 9) {value = 9}
    if (value < 1) {value = 1}
    return value;
  };
  
  return (
    <div>      
      <CartButton item={item} amount={amount}/>
      <Autocomplete
        className={styles.productDetailsCart}
        id="free-solo-demo"
        freeSolo
        disableClearable = {true}
        value = {amount.toString()}
        options={list.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="Amount" />}
        onChange = {handleOnChange}
        inputValue={amount.toString()}
        onInputChange={handleOnInputChange}
      />
    </div>
  );
};

export default ProductDetailsCart;