import styles from "./styles.module.css";
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";
import { Box, Typography } from "@mui/material";
import { green } from "@mui/material/colors";

const ProductDetailsPrice = ({ price }: { price: number }) => {
  let num = price.toFixed(2).toString().split(".");

  return (
    <Box className={styles.productDetailsPrice}>
      <MonetizationOnTwoToneIcon fontSize="small" sx={{ color: green[300] }} />
      <Typography fontSize={"large"}>{num[0]}</Typography>
      <Typography fontSize={"small"}>{num[1]}</Typography>
    </Box>
  );
};

export default ProductDetailsPrice;
