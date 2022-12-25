import { Typography } from "@mui/material";
import styles from "./styles.module.css";

const ProductCardTitle = ({ title }: { title: string }) => {
  return (
    <Typography
      fontSize={14}
      className={styles.productCardTitle}
      sx={{
        maxWidth: "100%",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 2,
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {title}
    </Typography>
  );
};

export default ProductCardTitle;
