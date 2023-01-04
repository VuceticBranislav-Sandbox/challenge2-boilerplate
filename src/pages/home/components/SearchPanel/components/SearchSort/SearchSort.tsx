import styles from "./styles.module.css";
import { MenuItem, Select, SelectChangeEvent, Tooltip } from "@mui/material";
import { useContext, useState } from "react";
import { SearchContext } from "context/search/SearchContext";
import { useTranslation } from "react-i18next";

const SearchSort = () => {
  const { searchState, updateSort } = useContext(SearchContext);
  const [sort, setSort] = useState<string>(searchState.sort);
  const { t } = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
    updateSort(event.target.value as string);
  };

  return (
    <Tooltip title={t("Sorting criteria")}>
      <Select
        className={styles.searchSort}
        value={sort}
        onChange={handleChange}
      >
        {searchState.sortType.map((x) => (
          <MenuItem value={x} key={x} className={styles.searchSort_menuItem}>
            {x}
          </MenuItem>
        ))}
      </Select>
    </Tooltip>
  );
};

export default SearchSort;
