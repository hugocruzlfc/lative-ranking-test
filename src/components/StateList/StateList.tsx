import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Alert } from "react-bootstrap";
import { MeasureFilterContext } from "../../context";
import { getStates } from "../../services/apiService";
import { DataState, Measure, MeasureFilterContextType } from "../../types";
import { StateItem } from "../StateItem";

import "./StateList.scss";

export default function StateList() {
  const { filters } = useContext(
    MeasureFilterContext
  ) as MeasureFilterContextType;
  const {
    data: states,
    error,
    isError,
  } = useQuery({
    queryKey: ["states", filters.measure, filters.year],
    queryFn: () => getStates(filters.measure, filters.year),
    select: (data) =>
      data.data.sort((a: DataState, b: DataState) => {
        if (filters.measure === Measure.HOUSEHOLD_INCOME) {
          return b["Household Income"]! - a["Household Income"]!;
        } else if (filters.measure === Measure.POPULATION) {
          return b.Population! - a.Population!;
        } else {
          return b["Property Value"]! - a["Property Value"]!;
        }
      }),
  });

  console.log(states);

  if (isError) {
    return (
      <Alert
        key="primary"
        variant="primary"
      >
        {error instanceof Error ? error.message : "Error"}
      </Alert>
    );
  }

  return (
    <div className="main">
      <div className="list">
        {states.map((state: DataState) => (
          <div
            className="item"
            key={state["ID State"]}
          >
            <StateItem state={state} />
          </div>
        ))}
      </div>
    </div>
  );
}
