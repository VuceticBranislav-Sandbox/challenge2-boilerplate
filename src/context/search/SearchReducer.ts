import { ISearchData } from "interfaces";

type CounterAction =
  | { type: "UpdateCategory"; payload: string }
  | { type: "UpdateSearch"; payload: string }
  | { type: "UpdateRange"; payload: number | number[] }
  | { type: "UpdateRangeLimit"; payload: number }
  | { type: "UpdateSort"; payload: string };

export const searchReducer = (
  state: ISearchData,
  action: CounterAction
): ISearchData => {
  switch (action.type) {
    case "UpdateCategory":
      return {
        ...state,
        category: action.payload,
      };

    case "UpdateSearch":
      return {
        ...state,
        search: action.payload,
      };

    case "UpdateRange":
      return {
        ...state,
        priceMin:
          typeof action.payload === "number"
            ? action.payload
            : action.payload[0],
        priceMax:
          typeof action.payload === "number"
            ? action.payload
            : action.payload[1],
      };

    case "UpdateRangeLimit":
      return {
        ...state,
        priceLimit: action.payload,
      };

    case "UpdateSort":
      return {
        ...state,
        sort: action.payload,
      };

    default:
      return state;
  }
};
