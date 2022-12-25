import { FunctionComponent, ReactNode } from "react";
import { Box } from "@mui/system";

interface IProps {
  children: ReactNode;
}

const Container: FunctionComponent<IProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        overflow: "auto",
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
