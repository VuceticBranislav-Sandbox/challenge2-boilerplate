import IconButton from "@mui/material/IconButton";
import styles from "./styles.module.css";
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductDetailsFavorite = () => {

  return (
    <IconButton className={styles.productDetailsFavorite}>
      <FavoriteIcon  />
    </IconButton>
  );
};

export default ProductDetailsFavorite;
