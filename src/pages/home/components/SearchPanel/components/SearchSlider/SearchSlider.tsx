import styles from "./styles.module.css";
import { Box, Slider } from "@mui/material";
import React, { useContext } from "react";
import { SearchContext } from "context/search/SearchContext";

function valuetext(value: number) {
  return `${value}$`;
}

const SearchSlider = () => {

  const { searchState, updateRange } = useContext(SearchContext);
  const [value, setValue] = React.useState<number[]>([searchState.priceMin, searchState.priceMax]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);   
  };

  const handleOnChangeCommitted = (event: Event | React.SyntheticEvent<Element, Event>, newValue: number | number[]) => {
    setValue(newValue as number[]);
    updateRange(newValue);    
  };

  return (   
    <Box sx={{ width: 300 }}>
      <Slider
        className={styles.searchSlider}
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        onChangeCommitted={handleOnChangeCommitted}
        valueLabelDisplay="auto"
        step={0.01}
        max={searchState.priceLimit}
        getAriaValueText={valuetext}
      />
    </Box>
  );

};

export default SearchSlider;