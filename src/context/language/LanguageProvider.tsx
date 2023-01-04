import { createContext, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { IProps } from "interfaces";

export type LanguageContextProps = {
  languageState: string;
};

const INITIAL_STATE = createContext("GB");

export const LanguageProvider = ({ children }: IProps) => {
  const state = useContext<string>(INITIAL_STATE);

  return (
    <LanguageContext.Provider
      value={{
        languageState: state,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
