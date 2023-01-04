import styles from "./styles.module.css";
import { Box, Slider, Tooltip, Typography } from "@mui/material";
import React, { useContext } from "react";
import { SearchContext } from "context/search/SearchContext";
import { useTranslation } from "react-i18next";

function valuetext(value: number) {
  return `${value}$`;
}

const SearchSlider = () => {
  const { searchState, updateRange } = useContext(SearchContext);
  const [value, setValue] = React.useState<number[]>([
    searchState.priceMin,
    searchState.priceMax,
  ]);
  const { t } = useTranslation();
  
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleOnChangeCommitted = (
    event: Event | React.SyntheticEvent<Element, Event>,
    newValue: number | number[]
  ) => {
    setValue(newValue as number[]);
    updateRange(newValue);
  };

  return (
    <Tooltip title={t("Price range")}>
      <Box className={styles.searchSlider_box}>
        <Slider
          size="small"
          className={styles.searchSlider}
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleChange}
          onChangeCommitted={handleOnChangeCommitted}
          valueLabelDisplay="off"
          step={1}
          max={searchState.priceLimit}
          getAriaValueText={valuetext}
        />
        <Box className={styles.searchSlider_values}>
          <Typography fontSize={"small"}>{value[0]}$</Typography>
          <Typography fontSize={"small"}>{value[1]}$</Typography>
        </Box>
      </Box>
    </Tooltip>
  );
};

export default SearchSlider;
