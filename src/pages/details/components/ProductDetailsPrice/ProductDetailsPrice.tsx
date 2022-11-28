import styles from "./styles.module.css";

const ProductDetailsPrice = ({price}: {price: number}) => {

  return (
      <div className={styles.productDetailsPrice}>
        Price: {price}$
      </div>
  );
};

export default ProductDetailsPrice;
