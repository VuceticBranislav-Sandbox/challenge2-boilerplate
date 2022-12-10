import { IProduct, IProductList } from "interfaces";
import styles from "./styles.module.css";

import ProductCard from "../ProductCard/ProductCard";

const ProductCardList = ({products}: IProductList) => {
  
  return (
    <div className={styles.productCardList}>
      {
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
      }
    </div>
  );
};

export default ProductCardList;
