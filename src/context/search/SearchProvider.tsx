import { ISearchData } from "interfaces";
import { useReducer } from "react";
import { SearchContext } from "./SearchContext";
import { searchReducer } from "./SearchReducer";

export type SearchContextProps = {
  searchState: ISearchData;
  updateCategory: (category: string) => void;
  updateSearch: (search: string) => void;
  updateRange: (range: number | number[]) => void;
  updateRangeLimit: (range: number) => void;
  updateSort: (range: string) => void;
};

const INITIAL_STATE: ISearchData = {
  priceMin: 0,
  priceMax: 1000,
  priceLimit: 1000,
  category: "All",
  search: "",
  sortType: [
    "Price ⇧",
    "Price ⇩",
    "Title ⇧",
    "Title ⇩",
    "Rating ⇧",
    "Rating ⇩",
    "Count ⇧",
    "Count ⇩",
  ],
  sort: "Price ⇧",
};

interface props {
  children: JSX.Element;
}

export const SearchProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE);

  const updateCategory = (category: string) => {
    dispatch({
      type: "UpdateCategory",
      payload: category,
    });
  };

  const updateSearch = (search: string) => {
    dispatch({
      type: "UpdateSearch",
      payload: search,
    });
  };

  const updateRange = (range: number | number[]) => {
    dispatch({
      type: "UpdateRange",
      payload: range,
    });
  };

  const updateRangeLimit = (limit: number) => {
    dispatch({
      type: "UpdateRangeLimit",
      payload: limit,
    });
  };

  const updateSort = (sort: string) => {
    dispatch({
      type: "UpdateSort",
      payload: sort,
    });
  };

  return (
    <SearchContext.Provider
      value={{
        searchState: state,
        updateCategory,
        updateSearch,
        updateRange,
        updateRangeLimit,
        updateSort,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
