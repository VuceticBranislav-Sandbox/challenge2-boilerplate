import { Typography } from "@mui/material";
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";
import { green } from "@mui/material/colors";
import styles from "./styles.module.css";

const ProductCardPrice = ({ price }: { price: number }) => {
  return (
    <Typography fontSize={14} className={styles.productCardPrice}>
      <MonetizationOnTwoToneIcon fontSize="small" sx={{ color: green[300] }} />
      {price}
    </Typography>
  );
};

export default ProductCardPrice;
