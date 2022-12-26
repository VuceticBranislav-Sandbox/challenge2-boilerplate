import styles from "./styles.module.css";
import { Card } from "@mui/material";
import SearchField from "./components/SearchField";
import SearchCategory from "./components/SearchCategory";
import SearchSlider from "./components/SearchSlider";
import SearchSort from "./components/SearchSort";

const SearchPanel = () => {
  return (
    <Card variant="outlined" className={styles.searchPanel}>
      <SearchSort />
      <SearchCategory />
      <SearchSlider />
      <SearchField />
    </Card>
  );
};

export default SearchPanel;
