import styles from "./styles.module.css";

const ProductDetailsCategory = ({category}: {category: string}) => {

  return (
      <div className={styles.productDetailsCategory}>
        {category}
      </div>
  );
};

export default ProductDetailsCategory;
