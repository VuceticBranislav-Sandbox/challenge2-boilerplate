import { Typography } from "@mui/material";
import styles from "./styles.module.css";

const ProductDetailsDescription = ({
  description,
}: {
  description: string;
}) => {
  return (
    <Typography fontSize="small" className={styles.productDetailsDescription}>
      {description}
    </Typography>
  );
};

export default ProductDetailsDescription;
