import styles from "./styles.module.css";
import {
  Autocomplete,
  TextField,
  createFilterOptions,
  Tooltip,
} from "@mui/material";
import { useContext, useState } from "react";
import { SearchContext } from "context/search/SearchContext";
import homeHooks from "pages/home/useHomeHooks";
import { useTranslation } from "react-i18next";

const SearchField = () => {
  const autocomplete = homeHooks.useAutocomplete();
  const { searchState, updateSearch } = useContext(SearchContext);
  const [value, setValue] = useState<string | null>(searchState.search);
  const [inputValue, setInputValue] = useState<string>(searchState.search);
  const { t } = useTranslation();

  const handleOnInputChange = (event: any, newInputValue: string) => {
    setInputValue(newInputValue);
    updateSearch(newInputValue);
  };

  const handleOnChange = (event: any, newValue: string | null) => {
    setValue(newValue);
    updateSearch(newValue ?? "");
  };

  const filterOptions = createFilterOptions({
    matchFrom: "start",
    limit: 5,
    stringify: (option: string) => option,
  });

  return (
    <Tooltip title={t("Search")}>
      <Autocomplete
        fullWidth
        size="small"
        className={styles.searchField}
        disablePortal
        options={autocomplete}
        getOptionLabel={(option) => option}
        filterOptions={filterOptions}
        freeSolo
        renderInput={(params) => <TextField {...params} label={t("Search")} />}
        value={value}
        onChange={handleOnChange}
        inputValue={inputValue}
        onInputChange={handleOnInputChange}
      />
    </Tooltip>
  );
};

export default SearchField;
