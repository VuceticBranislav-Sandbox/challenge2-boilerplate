import styles from "./styles.module.css";

const ProductDetailsRating = ({rate, count}: {rate: number, count:number}) => {

  return (
      <div className={styles.productDetailsRating}>
        Rate: {rate}, Count: {count}
      </div>
  );
};

export default ProductDetailsRating;
