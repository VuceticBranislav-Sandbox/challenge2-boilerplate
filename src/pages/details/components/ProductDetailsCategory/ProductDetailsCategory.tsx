import { Typography } from "@mui/material";
import styles from "./styles.module.css";

const ProductDetailsCategory = ({ category }: { category: string }) => {
  return (
    <Typography fontSize="small" className={styles.productDetailsCategory}>
      {category}
    </Typography>
  );
};

export default ProductDetailsCategory;
