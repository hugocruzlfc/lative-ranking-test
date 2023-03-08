import { createContext, useState } from "react";
import { Measure, MeasureFilterContextType } from "../types";

export const MeasureFilterContext =
  createContext<MeasureFilterContextType | null>(null);

const INITIAL_STATE = {
  measure: Measure.HOUSEHOLD_INCOME,
};

interface Props {
  children: React.ReactNode;
}

export const MeasureFilterContextProvider = ({ children }: Props) => {
  const [measure, setMeasure] = useState<string>(INITIAL_STATE.measure);

  return (
    <MeasureFilterContext.Provider value={{ measure, setMeasure }}>
      {children}
    </MeasureFilterContext.Provider>
  );
};
