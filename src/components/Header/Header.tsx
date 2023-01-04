import { memo } from "react";
import CartBadge from "components/CartBadge";
import WishlistBadge from "components/WishlistBadge";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_transparent.png";
import { Box } from "@mui/material";
import DarkMode from "components/DarkMode";

export const Header = () => {
  return (
    <Box className={styles.header}>
      <Box className={styles.header_content}>
        <Box className={styles.logo_wrapp}>
          <Link to={"/"}>
            <img src={logo} alt="logo" style={{ width: "50px" }} />
          </Link>
        </Box>
        <Box className="flex">
          <DarkMode />
          <WishlistBadge />
          <CartBadge />
        </Box>
      </Box>
    </Box>
  );
};

export default memo(Header);
