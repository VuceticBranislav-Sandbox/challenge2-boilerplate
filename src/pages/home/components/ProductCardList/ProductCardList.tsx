import { IProduct } from "interfaces";
import styles from "./styles.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { Box } from "@mui/system";
import homeHooks from "pages/home/useHomeHooks";

const ProductCardList = () => {
  const products: IProduct[] = homeHooks.useProducts();

  return (
    <Box className={styles.productCardList}>
      {products.map((product: IProduct) => (
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
            count: product.rating.count,
          }}
        />
      ))}
    </Box>
  );
};

export default ProductCardList;
