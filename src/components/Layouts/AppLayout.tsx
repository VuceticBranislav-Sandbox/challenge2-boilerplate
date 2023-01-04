import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import Header from "components/Header";
import Footer from "components/Footer";
import styles from "./styles.module.css";
import Container from "components/Container";
import BottomInfo from "components/BottomInfo";

interface IProps {
  children?: ReactNode;
}

const AppLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Box className={styles.appLayoutGrid}>
      <Header />
      <Container>{[children, <BottomInfo key="keyBottomInfo" />]}</Container>
      <Footer />
    </Box>
  );
};

export default AppLayout;
