import { Box, Rating, Typography } from "@mui/material";
import styles from "./styles.module.css";
import StarIcon from "@mui/icons-material/Star";

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
        emptyIcon={<StarIcon fontSize="inherit" />}
      />
      <Typography fontSize={"small"} sx={{ marginLeft: "10px" }}>
        {count} Reviews
      </Typography>
    </Box>
  );
};

export default ProductDetailsRating;
