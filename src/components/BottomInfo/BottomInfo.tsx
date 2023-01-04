import styles from "./styles.module.css";
import logo from "../../assets/images/LogoLevi.png";
import { Box, Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const BottomInfo = () => {
  const { t } = useTranslation();

  return (
    <Box className={styles.bottomInfo}>
      <Link underline="none" color="inherit" href="https://www.levi9.com/#">
        <img src={logo} alt="logo" width="100" />
      </Link>
      <Box className={styles.bottomInfo_box}>
        <Typography>{t("Contact")}</Typography>
        <Typography fontSize="small">Muiderstraat 1</Typography>
        <Typography fontSize="small">1011 PZ Amsterdam</Typography>
        <Typography fontSize="small">The Neatherlands</Typography>
      </Box>
      <Box className={styles.bottomInfo_box}>
        <Typography>{t("Explore")}</Typography>
        <Link
          underline="none"
          color="inherit"
          fontSize="small"
          href="https://www.levi9.com/contact/#"
        >
          Amsterdam
        </Link>
        <Link
          underline="none"
          color="inherit"
          fontSize="small"
          href="https://www.levi9.com/portfolio/office-belgrade/#"
        >
          Belgrade
        </Link>
        <Link
          underline="none"
          color="inherit"
          fontSize="small"
          href="https://www.levi9.com/portfolio/office-novi-sad/#"
        >
          Novi Sad
        </Link>
        <Link
          underline="none"
          color="inherit"
          fontSize="small"
          href="https://www.levi9.com/portfolio/office-zrenjanin/#"
        >
          Zrenjanin
        </Link>
      </Box>
    </Box>
  );
};

export default BottomInfo;
