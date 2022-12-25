import { IProduct } from "interfaces";
import styles from "./styles.module.css";
import { Box, Card } from "@mui/material";
import ProductFavorite from "./components/ProductFavorite";
import ProductCardTitle from "./components/ProductCardTitle";
import ProductCardCategory from "./components/ProductCardCategory";
import ProductCardRating from "./components/ProductCardRating";
import ProductCardPrice from "./components/ProductCardPrice";
import ProductCardImage from "./components/ProductCardImage";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, price, category, image, rating }: IProduct) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Link to={"/details/" + id} style={{ textDecoration: "none" }}>
        <Card
          square={true}
          variant="outlined"
          className={styles.productCard}
          sx={{ ":hover": { boxShadow: 5 } }}
        >
          <ProductCardTitle title={title} />
          <ProductCardImage url={image} title={title} />
          <ProductCardCategory title={category} />
          <ProductCardRating rating={rating.rate} />
          <ProductCardPrice price={price} />
        </Card>
      </Link>
      <ProductFavorite />
    </Box>
  );
};

export default ProductCard;
