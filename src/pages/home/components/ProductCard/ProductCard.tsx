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

const ProductCard = (product: IProduct) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Link to={"/details/" + product.id} style={{ textDecoration: "none" }}>
        <Card
          square={true}
          variant="outlined"
          className={styles.productCard}
          sx={{ ":hover": { boxShadow: 5 } }}
        >
          <ProductCardTitle title={product.title} />
          <ProductCardImage url={product.image} title={product.title} />
          <ProductCardCategory title={product.category} />
          <ProductCardRating rating={product.rating.rate} />
          <ProductCardPrice price={product.price} />
        </Card>
      </Link>
      <ProductFavorite product={product} />
    </Box>
  );
};

export default ProductCard;
