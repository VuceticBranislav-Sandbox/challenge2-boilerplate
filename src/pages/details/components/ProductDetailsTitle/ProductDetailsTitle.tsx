import { Typography } from "@mui/material";
import styles from "./styles.module.css";

const ProductDetailsTitle = ({ title }: { title: string }) => {
  return (
    <Typography fontSize="large" className={styles.productDetailsTitle}>
      {title}
    </Typography>
  );
};

export default ProductDetailsTitle;
