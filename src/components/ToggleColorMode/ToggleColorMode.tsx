import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { IProps } from "interfaces";
import { ColorModeContext } from "context/colorMode/ColorModeContext";
import { blue, grey } from "@mui/material/colors";

const ToggleColorMode = ({ children }: IProps) => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: blue,
                divider: blue[200],
                paper: {
                  background: grey[50],
                  container: grey[50],
                },
                background: {
                  default: blue[50],
                  paper: blue[50],
                },
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
                action: {
                  active: grey[500],
                  disabled: grey[500],
                },
              }
            : {
                primary: blue,
                divider: blue[700],
                paper: {
                  background: "#27334d",
                  container: grey[100],
                },
                background: {
                  default: blue[100],
                  paper: blue[100],
                },
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
                action: {
                  active: grey[500],
                  disabled: grey[500],
                },
              }),
        },
        components: {
          MuiSelect: {
            defaultProps: {},
            styleOverrides: {
              outlined: {
                color: blue[900],
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
