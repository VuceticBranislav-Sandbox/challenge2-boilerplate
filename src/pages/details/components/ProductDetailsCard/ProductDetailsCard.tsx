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
  rating
  }:IProductDetails) => {

  return (
      <div className={styles.productDetailsCard}>
        <ProductDetailsTitle title={title}/>
        <ProductDetailsCategory category={category}/>
        <ProductDetailsImage image={image}/>
        <ProductDetailsPrice price={price}/>
        <ProductDetailsRating rate={rating.rate} count={rating.count}></ProductDetailsRating>
        <ProductDetailsDescription description={description}/>
        <ProductDetailsFavorite/>
        <ProductDetailsCart/>
      </div>
  );
};

export default ProductDetailsCard;
