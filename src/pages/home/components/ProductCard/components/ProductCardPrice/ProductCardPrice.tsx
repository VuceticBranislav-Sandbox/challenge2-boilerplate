import { Box, Typography } from "@mui/material";
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";
import { green } from "@mui/material/colors";
import styles from "./styles.module.css";

const ProductCardPrice = ({ price }: { price: number }) => {
  let num = price.toFixed(2).toString().split(".");

  return (
    <Box className={styles.productCardPrice}>
      <MonetizationOnTwoToneIcon fontSize="small" sx={{ color: green[300] }} />
      <Typography fontSize={"large"}>{num[0]}</Typography>
      <Typography fontSize={"small"}>{num[1]}</Typography>
    </Box>
  );
};

export default ProductCardPrice;
