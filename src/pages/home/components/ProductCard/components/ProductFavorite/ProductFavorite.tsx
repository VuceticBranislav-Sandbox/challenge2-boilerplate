import styles from "./styles.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";

const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.stopPropagation();
};

const ProductFavorite = () => {
  return (
    <IconButton
      onClick={handleClick}
      size="small"
      sx={{ position: "absolute", left: "185px", top: "185px" }}
      className={styles.productFavorite}
    >
      <FavoriteIcon fontSize="small" />
    </IconButton>
  );
};

export default ProductFavorite;
