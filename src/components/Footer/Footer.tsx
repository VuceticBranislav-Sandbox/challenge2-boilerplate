import styles from "./styles.module.css";
import { Box, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Typography fontSize='inherit' color='inherit'>
        Powered by Branislav Vucetic @ 2022
      </Typography>
      <Link underline="none" color="inherit" href='https://github.com/VuceticBranislav-Sandbox/challenge2-boilerplate/#' >
        <GitHubIcon fontSize='inherit' color='inherit' sx={{paddingLeft: "10px"}}/>
      </Link>
      <Link underline="none" color="inherit" href='https://rs.linkedin.com/in/vuceticbranislav/#'>
        <LinkedInIcon fontSize='inherit' color='inherit' sx={{paddingLeft: "10px"}}/>
      </Link>
    </Box>
  );
};

export default Footer;
