import IconButton from "@mui/material/IconButton";
import styles from "./styles.module.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react";
import { CartContext } from "context/cart/CartContext";
import { ICartItem } from "interfaces";

const CartButton = ({item, amount}: {item: ICartItem, amount: number}) => { 
  const { addToCart } = useContext(CartContext);
  
  const handleOnChange = () => {
    addToCart(item, amount);
  };  

  return (
    <IconButton className={styles.productDetailsCart}
      onClick = {handleOnChange}
    >
      <ShoppingCartIcon />      
    </IconButton>   
  );
};

export default CartButton;