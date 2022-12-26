import styles from "./styles.module.css";
import { MenuItem, Select, SelectChangeEvent, Tooltip } from "@mui/material";
import { useContext, useState } from "react";
import { SearchContext } from "context/search/SearchContext";

const SearchSort = () => {
  const { searchState, updateSort } = useContext(SearchContext);
  const [sort, setSort] = useState<string>(searchState.sort);

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
    updateSort(event.target.value as string);
  };

  return (
    <Tooltip title="Sorting criteria">
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
