import logo404 from "../../assets/images/logo_404.png";
import { AppLayout } from "components/Layouts";
import styles from "./styles.module.css";
import { Box } from "@mui/material";

const NotFound = () => {
  return (
    <AppLayout>
      <Box className={styles.page404}>
        <img
          src={logo404}
          className={styles.image}
          height={"300px"}
          width={"300px"}
          alt="logo404"
        />
      </Box>
    </AppLayout>
  );
};

export default NotFound;
