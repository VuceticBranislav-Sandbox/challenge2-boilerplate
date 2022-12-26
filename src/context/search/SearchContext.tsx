import { createContext } from "react";
import { SearchContextProps } from "./SearchProvider";

export const SearchContext = createContext<SearchContextProps>(
  {} as SearchContextProps
);
