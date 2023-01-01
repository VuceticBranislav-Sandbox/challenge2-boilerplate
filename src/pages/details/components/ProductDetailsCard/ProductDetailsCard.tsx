import { Box, Divider } from "@mui/material";
import { IProductDetails } from "interfaces";
import ProductDetailsCart from "../ProductDetailsCart";
import ProductDetailsCategory from "../ProductDetailsCategory";
import ProductDetailsDescription from "../ProductDetailsDescription";
import ProductDetailsFavorite from "../ProductDetailsFavorite";
import ProductDetailsImage from "../ProductDetailsImage";
import ProductDetailsPrice from "../ProductDetailsPrice";
import ProductDetailsRating from "../ProductDetailsRating";
import ProductDetailsTitle from "../ProductDetailsTitle/ProductDetailsTitle";

import styles from "./styles.module.css";

const ProductDetailsCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: IProductDetails) => {
  return (
    <Box className={styles.productDetailsCard}>
      <ProductDetailsTitle title={title} />
      <Box className={styles.productDetailsCard_content}>
        <Box className={styles.productDetailsCard_leftPanel}>
          <ProductDetailsImage image={image} />
        </Box>
        <Box className={styles.productDetailsCard_rightPanel}>
          <ProductDetailsCategory category={category} />
          <ProductDetailsRating
            rate={rating.rate}
            count={rating.count}
          ></ProductDetailsRating>
          <ProductDetailsPrice price={price} />
          <Divider className={styles.productDetailsCard_divider} />
          <ProductDetailsDescription description={description} />
          <Divider className={styles.productDetailsCard_divider} />
          <Box className={styles.productDetailsCard_buttons}>
            <ProductDetailsFavorite />
            <ProductDetailsCart
              item={{
                id: id,
                title: title,
                price: price,
                image: image,
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
