import styles from "./styles.module.css";
import { Autocomplete, Box, TextField, createFilterOptions} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "context/search/SearchContext";
import productServices from "services/product.services";

const SearchField = () => {

  const { searchState, updateSearch } = useContext(SearchContext);
  const [autocomplete, setAutocomplete] = useState<string[]>([]);
  const [value, setValue] = useState<string | null>(searchState.search);
  const [inputValue, setInputValue] = useState<string>(searchState.search);

  useEffect(() => {
    (async () => {
      setAutocomplete(await productServices.getProductsAutocomplete(searchState));
    })();
  }, [value, inputValue, searchState]); 

  const handleOnInputChange = (event: any, newInputValue: string) => {
    setInputValue(newInputValue);
    updateSearch(newInputValue);
  };

  const handleOnChange = (event: any, newValue: string | null) => {
    setValue(newValue);
    updateSearch(newValue ?? '');
  };  

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    limit: 5,
    stringify: (option: string) => option
  });

  return (   
    <Box>
      <Autocomplete
        className={styles.searchField}
        disablePortal
        options={autocomplete}
        getOptionLabel={(option) => option}
        id="combo-box-search"
        filterOptions={filterOptions}
        freeSolo
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search" />}
        value={value}
        onChange={handleOnChange}
        inputValue={inputValue}
        onInputChange={handleOnInputChange}
      />
    </Box>
  );
  
};

export default SearchField;
