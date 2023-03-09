import { useQuery } from "@tanstack/react-query";
import { useContext, useMemo } from "react";
import Card from "react-bootstrap/Card";
import { MeasureFilterContext } from "../../context";
import { getStates } from "../../services";
import { DataState, MeasureFilterContextType, Measure } from "../../types";
import {
  formatterCurrency,
  formatterPopulation,
  growthCalculation,
} from "../../utilities";

interface Props {
  state: DataState;
}

export default function StateItem({ state }: Props) {
  const { filters } = useContext(
    MeasureFilterContext
  ) as MeasureFilterContextType;
  const lastYear = useMemo(
    () => filters.year - filters.growthPeriod,
    [filters]
  );
  const { data: lastStates } = useQuery({
    queryKey: ["lastStates", filters.measure, lastYear],
    queryFn: () => getStates(filters.measure, lastYear),
  });

  const growthCalculate = useMemo(() => {
    const lastState = lastStates.data.find(
      (item: DataState) => item.State === state.State
    );

    const values = [];
    if (filters.measure === Measure.HOUSEHOLD_INCOME) {
      values[0] = state["Household Income"];
      values[1] = lastState["Household Income"];
    } else if (filters.measure === Measure.POPULATION) {
      values[0] = state.Population;
      values[1] = lastState.Population;
    } else {
      values[0] = state["Property Value"];
      values[1] = lastState["Property Value"];
    }

    const currentGrowth = growthCalculation(values, 1);
    return currentGrowth;
  }, [filters.measure, state]);

  return (
    <Card
      bg="light"
      style={{ width: "20rem" }}
    >
      <Card.Body>
        <Card.Title>{state.State.toLocaleUpperCase()}</Card.Title>
        <div className="row">
          <div className="col-md-6">
            <Card.Text>{growthCalculate}%</Card.Text>
          </div>
          <div className="col-md-6">
            <Card.Text>
              {filters.measure === Measure.HOUSEHOLD_INCOME && (
                <span>
                  {formatterCurrency.format(state["Household Income"]!)}
                </span>
              )}
              {filters.measure === Measure.POPULATION && (
                <span>{formatterPopulation.format(state.Population!)}</span>
              )}
              {filters.measure === Measure.PROPERTY_VALUE && (
                <span>
                  {formatterCurrency.format(state["Property Value"]!)}
                </span>
              )}
            </Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
