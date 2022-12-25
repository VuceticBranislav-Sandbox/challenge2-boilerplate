import Rating from "@mui/material/Rating";

const ProductCardRating = ({ rating }: { rating: number }) => {
  return (
    <Rating
      name="half-rating-read"
      size="small"
      defaultValue={0}
      precision={0.1}
      value={rating}
      readOnly
    />
  );
};

export default ProductCardRating;
