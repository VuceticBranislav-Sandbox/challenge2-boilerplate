import { Button } from "@mui/material";
import styles from "./styles.module.css";
import { FunctionComponent, useContext } from "react";
import { CartContext } from "context/cart/CartContext";
import { useTranslation } from "react-i18next";

interface IProps {
  onClickEvent: (event: React.MouseEvent<HTMLElement>) => void;
}

const CheckoutButton: FunctionComponent<IProps> = ({ onClickEvent }) => {
  const { cartState } = useContext(CartContext);
  const { items } = cartState;
  const { t } = useTranslation();
  
  return (
    <Button
      variant="contained"
      disabled={items.length === 0}
      className={styles.checkoutButton}
      onClick={onClickEvent}
    >
      {t("Proceed to Checkout")}
    </Button>
  );
};

export default CheckoutButton;
