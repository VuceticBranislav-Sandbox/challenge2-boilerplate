import { Typography } from "@mui/material";
import styles from "./styles.module.css";

interface IProps {
  title: string;
}
const Headline = ({ title }: IProps) => {
  return <Typography className={styles.headline}>{title}</Typography>;
};

export default Headline;
