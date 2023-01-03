import { Box, Divider } from "@mui/material";
import { IProduct } from "interfaces";
import ProductDetailsCart from "../ProductDetailsCart";
import ProductDetailsCategory from "../ProductDetailsCategory";
import ProductDetailsDescription from "../ProductDetailsDescription";
import ProductDetailsFavorite from "../ProductDetailsFavorite";
import ProductDetailsImage from "../ProductDetailsImage";
import ProductDetailsPrice from "../ProductDetailsPrice";
import ProductDetailsRating from "../ProductDetailsRating";
import ProductDetailsTitle from "../ProductDetailsTitle/ProductDetailsTitle";

import styles from "./styles.module.css";

const ProductDetailsCard = (product: IProduct) => {
  return (
    <Box className={styles.productDetailsCard}>
      <ProductDetailsTitle title={product.title} />
      <Box className={styles.productDetailsCard_content}>
        <Box className={styles.productDetailsCard_leftPanel}>
          <ProductDetailsImage image={product.image} />
        </Box>
        <Box className={styles.productDetailsCard_rightPanel}>
          <ProductDetailsCategory category={product.category} />
          <ProductDetailsRating
            rate={product.rating.rate}
            count={product.rating.count}
          ></ProductDetailsRating>
          <ProductDetailsPrice price={product.price} />
          <Divider className={styles.productDetailsCard_divider} />
          <ProductDetailsDescription description={product.description} />
          <Divider className={styles.productDetailsCard_divider} />
          <Box className={styles.productDetailsCard_buttons}>
            <ProductDetailsFavorite product={product} />
            <ProductDetailsCart
              item={{
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetailsCard;
