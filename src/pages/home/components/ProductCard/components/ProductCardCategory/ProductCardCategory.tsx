import { Typography } from "@mui/material";
import styles from "./styles.module.css";

const ProductCardCategory = ({ title }: { title: string }) => {
  return (
    <Typography fontSize={"small"} className={styles.productCardCategory}>
      {title}
    </Typography>
  );
};

export default ProductCardCategory;
