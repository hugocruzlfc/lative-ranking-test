import { createContext, useState } from "react";
import { Measure, MeasureFilterContextType } from "../types";
import { FilterType } from "../types";

export const MeasureFilterContext =
  createContext<MeasureFilterContextType | null>(null);

const INITIAL_STATE: FilterType = {
  measure: Measure.HOUSEHOLD_INCOME,
  year: 2019,
  growthPeriod: 1,
};

interface Props {
  children: React.ReactNode;
}

export const MeasureFilterContextProvider = ({ children }: Props) => {
  const [filters, setFilters] = useState<FilterType>(INITIAL_STATE);

  return (
    <MeasureFilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </MeasureFilterContext.Provider>
  );
};
