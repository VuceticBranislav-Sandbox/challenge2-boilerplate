import { IProduct } from "interfaces";
import styles from "./styles.module.css";

import { Link as RouterLink } from 'react-router-dom';
import { Card, CardActionArea } from "@mui/material";

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
      <CardActionArea component={RouterLink} to={'/details/' + id} sx={{display: "grid", justifyItems: "center"}} >
        <p className={styles.productCard_title}>{title}</p>
        <div className={styles.productCard_priceInfo}>{category}</div>
        <img className={styles.productCard_image} src={image} alt={title} />      
        <div className={styles.productCard_state}>        
          <span className={styles.productCard_priceInfo}>P:{price}$ </span>
          <span className={styles.productCard_priceInfo}>R:{rating.rate} </span>
          <span className={styles.productCard_priceInfo}>C:{rating.count} </span>       
        </div>
        <div className={styles.productCard_description}>{description}</div>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
