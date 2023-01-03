import { IProps } from "interfaces";
import { useReducer } from "react";
import { CounterContext } from "./CounterContext";
import { cartReducer } from "./CounterReducer";


export interface CounterState {
  total: number;
}

export type CounterContextProps = {
  counterState: CounterState;
  addition: () => void;
  subtraction: () => void;
};

const INITIAL_STATE: CounterState = {
  total: 0,
 
};

export const CounterProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

 
  const addition = () => {
    dispatch({
      type:'Addition',
      payload:null
    })
  };
  const subtraction = () => {
    dispatch({
      type:'Subtraction',
      payload:null
    })
  };


  return (
    <CounterContext.Provider
      value={{
        counterState: state,
        addition,
        subtraction,
      
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
