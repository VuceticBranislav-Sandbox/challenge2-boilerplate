import { IProduct } from "interfaces";
import styles from "./styles.module.css";

import Card from "@mui/material/Card";

const ProductCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: IProduct) => {
  
  return (
    <Card variant="outlined" className={styles.productCard} >
      <p className={styles.productCard_title}>{title}</p>
      <div className={styles.productCard_priceInfo}>{category}</div>
      <img className={styles.productCard_image} src={image} alt={title} />      
      <div className={styles.productCard_state}>        
        <span className={styles.productCard_priceInfo}>P:{price}$ </span>
        <span className={styles.productCard_priceInfo}>R:{rating.rate} </span>
        <span className={styles.productCard_priceInfo}>C:{rating.count} </span>       
      </div>
      <div className={styles.productCard_description}>{description}</div>
    </Card>
  );
};

export default ProductCard;
