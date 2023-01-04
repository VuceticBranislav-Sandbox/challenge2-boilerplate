import styles from "./styles.module.css";
import { MenuItem, Select, SelectChangeEvent, Tooltip } from "@mui/material";
import { useContext, useState } from "react";
import { SearchContext } from "context/search/SearchContext";
import homeHooks from "pages/home/useHomeHooks";
import { useTranslation } from "react-i18next";

const SearchCategory = () => {
  const categories = homeHooks.useCategories();
  const { searchState, updateCategory } = useContext(SearchContext);
  const [value, setValue] = useState<string>(searchState.category);
  const { t } = useTranslation();
  
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    updateCategory(event.target.value as string);
  };

  return (
    <Tooltip title={t("Filter by category")}>
      <Select
        className={styles.searchCategory}
        value={value}
        onChange={handleChange}
      >
        {categories.map((x) => (
          <MenuItem
            value={x}
            key={x}
            className={styles.searchCategory_menuItem}
          >
            {x}
          </MenuItem>
        ))}
      </Select>
    </Tooltip>
  );
};

export default SearchCategory;
