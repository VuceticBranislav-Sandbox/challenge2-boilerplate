import IconButton from "@mui/material/IconButton";
import styles from "./styles.module.css";
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductFavorite = () => {

  return (
    <IconButton className={styles.productFavorite}>
      <FavoriteIcon  />
    </IconButton>
  );
};

export default ProductFavorite;
