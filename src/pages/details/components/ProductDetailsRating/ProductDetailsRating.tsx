import { Box, Rating, Typography } from "@mui/material";
import styles from "./styles.module.css";

const ProductDetailsRating = ({
  rate,
  count,
}: {
  rate: number;
  count: number;
}) => {
  return (
    <Box className={styles.productDetailsRating}>
      <Rating
        name="half-rating-read"
        size="small"
        defaultValue={0}
        precision={0.1}
        value={rate}
        readOnly
      />
      <Typography fontSize={"small"} sx={{ marginLeft: "10px" }}>
        {count} Reviews
      </Typography>
    </Box>
  );
};

export default ProductDetailsRating;
