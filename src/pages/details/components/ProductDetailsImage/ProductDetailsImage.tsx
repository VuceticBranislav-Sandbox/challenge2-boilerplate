import { Box } from "@mui/material";
import styles from "./styles.module.css";

const ProductDetailsImage = ({ image }: { image: string }) => {
  return (
    <Box
      component="img"
      className={styles.productDetailsImage}
      alt={image}
      src={image}
    />
  );
};

export default ProductDetailsImage;
