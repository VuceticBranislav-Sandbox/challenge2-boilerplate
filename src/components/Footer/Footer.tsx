import React from "react";
import styles from "./styles.module.css";
import logo from "../../assets/images/LogoLevi.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="logo" width="100" />
    </footer>
  );
};

export default Footer;
