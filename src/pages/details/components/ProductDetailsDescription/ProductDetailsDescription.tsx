import styles from "./styles.module.css";

const ProductDetailsDescription = ({description}: {description: string}) => {

  return (
      <div className={styles.productDetailsDescription}>
        {description}
      </div>
  );
};

export default ProductDetailsDescription;
