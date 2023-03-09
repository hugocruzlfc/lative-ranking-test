import { FilterType } from "./Filter";

export type MeasureFilterContextType = {
  filters: FilterType;
  setFilters: (filters: FilterType) => void;
};
