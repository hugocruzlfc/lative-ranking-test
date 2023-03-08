import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getStates } from "../../services/apiService";
import { DataState, Measure } from "../../types";
import { StateItem } from "../StateItem";

import "./StateList.scss";

export default function StateList() {
  const [measures, setMeassure] = useState<string>(Measure.HOUSEHOLD_INCOME);
  const [year, setYear] = useState<string>("2018");
  const {
    isLoading,
    data: states,
    isError,
    error,
  } = useQuery({
    queryKey: ["states", measures, year],
    queryFn: () => getStates(measures, year),
  });

  //
  return (
    <div className="main">
      <div className="list">
        {states.data.map((state: DataState) => (
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
