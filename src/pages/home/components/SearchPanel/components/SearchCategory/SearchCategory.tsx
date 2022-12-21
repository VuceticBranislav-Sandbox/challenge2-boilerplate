import styles from "./styles.module.css"
import { Box, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useContext, useState } from "react"
import { SearchContext } from "context/search/SearchContext"
import hooks from "hooks/useRenderingCounter"

const SearchCategory = () => {
  const categories = hooks.useCategories()
  const { searchState, updateCategory } = useContext(SearchContext)
  const [value, setValue] = useState<string>(searchState.category)

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string)
    updateCategory(event.target.value as string)
  }

  return (   
    <Box>
      <InputLabel id="search-category-label">Category</InputLabel>
        <Select
          className={styles.searchField}
          labelId="search-category-label"
          id="search-category-select"
          value={value}
          label="Category"
          onChange={handleChange}
        >
          {categories.map(x => <MenuItem value={x} key={x}>{x}</MenuItem>)}
        </Select>
    </Box>
  )  
}

export default SearchCategory