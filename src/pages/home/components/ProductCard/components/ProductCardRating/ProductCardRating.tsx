import Rating from "@mui/material/Rating";
import StarIcon from '@mui/icons-material/Star';

const ProductCardRating = ({ rating }: { rating: number }) => {
  return (
    <Rating
      name="half-rating-read"
      size="small"
      defaultValue={0}
      precision={0.1}
      value={rating}
      readOnly
      emptyIcon={<StarIcon fontSize="inherit" />}
    />
  );
};

export default ProductCardRating;
