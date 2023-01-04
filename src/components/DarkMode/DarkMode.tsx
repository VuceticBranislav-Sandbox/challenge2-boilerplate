import React, { memo } from "react";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "context/colorMode/ColorModeContext";
import styles from "./styles.module.css";
import { Tooltip } from "@mui/material";

const DarkMode = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Tooltip title={`${theme.palette.mode} mode`}>
      <IconButton
        className={styles.darkMode_badge}
        sx={{
          marginLeft: 0,
          bgcolor: "background.default",
          color: "text.primary",
        }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon className={styles.darkMode_icon} />
        ) : (
          <Brightness4Icon className={styles.darkMode_icon} />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default memo(DarkMode);
