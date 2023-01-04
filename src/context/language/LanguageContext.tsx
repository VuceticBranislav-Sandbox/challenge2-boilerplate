import { createContext } from "react";
import { LanguageContextProps } from "./LanguageProvider";

export const LanguageContext = createContext<LanguageContextProps>(
  {} as LanguageContextProps
);
