import { IProduct, IProductList } from "interfaces";
import styles from "./styles.module.css";

import ProductCard from "../ProductCard/ProductCard";
import LinearProgress from "@mui/material/LinearProgress";

const ProductCardList = ({
  products
}: IProductList) => {
  
  return (
      <div className={styles.productCardList}>
        {products.length !== 0 ?
          products.map((product:IProduct) => (
            <ProductCard
              key={product.id.toString()} 
              id={product.id} 
              title={product.title} 
              price={product.price} 
              description={product.description} 
              category={product.category} 
              image={product.image} 
              rating={{
                rate: product.rating.rate,
                count: product.rating.count
              }} />
          ))
          : <LinearProgress sx={{width: "100%"}} />
        }
      </div>
  );
};

export default ProductCardList;
