import { memo } from "react";
import CartBadge from "components/CartBadge";
import WishlistBadge from "components/WishlistBadge";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_transparent.png";
import { Box } from "@mui/material";

export const Header = () => {
  return (
    <Box className={styles.header}>
      <Box className={styles.header_content}>
        <div className={styles.logo_wrapp}>
          <Link to={"/"}>
            <img src={logo} alt='logo' style={{ width: "50px" }} />
          </Link>
        </div>
        <nav>
          <ul className={styles.nav_items}>
            <Link to={"/example"}>
              <li className={styles.nav_item}>Example</li>
            </Link>
          </ul>
        </nav>
        <div className='flex'>
          <WishlistBadge />
          <CartBadge />
        </div>
      </Box>
    </Box>
  );
};

export default memo(Header);
