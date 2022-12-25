import styles from "./styles.module.css";

const ProductCardImage = ({ url, title }: { url: string; title: string }) => {
  return <img className={styles.productCardImage} src={url} alt={title} />;
};

export default ProductCardImage;
