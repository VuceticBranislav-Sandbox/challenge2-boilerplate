import styles from "./styles.module.css";
import { Box, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
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
    <Box>
      <InputLabel id="search-category-label">Category</InputLabel>
        <Select
          className={styles.searchSort}
          labelId="search-category-label"
          id="search-category-select"
          value={sort}
          label="Sort"
          onChange={handleChange}
        >
          {searchState.sortType.map(x => <MenuItem value={x} key={x}>{x}</MenuItem>)}
        </Select>
    </Box>
  );
  
};

export default SearchSort;