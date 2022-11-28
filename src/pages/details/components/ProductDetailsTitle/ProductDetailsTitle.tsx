import styles from "./styles.module.css";

const ProductDetailsTitle = ({title}: {title: string}) => {

  return (
      <div className={styles.productDetailsTitle}>
        {title}
      </div>
  );
};

export default ProductDetailsTitle;
