import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { MeasureFilterContext } from "../../context";
import { DataState, MeasureFilterContextType, Measure } from "../../types";
import { formatterCurrency, formatterPopulation } from "../../utilities";

interface Props {
  state: DataState;
}

export default function StateItem({ state }: Props) {
  console.log(state);
  const { measure } = useContext(
    MeasureFilterContext
  ) as MeasureFilterContextType;

  console.log(measure);
  return (
    <Card
      bg="light"
      style={{ width: "20rem" }}
    >
      <Card.Body>
        <Card.Title>{state.State.toLocaleUpperCase()}</Card.Title>
        <div className="row">
          <div className="col-md-6">
            <Card.Text>GROW</Card.Text>
          </div>
          <div className="col-md-6">
            <Card.Text>
              {measure === Measure.HOUSEHOLD_INCOME && (
                <span>
                  {formatterCurrency.format(state["Household Income"]!)}
                </span>
              )}
              {measure === Measure.POPULATION && (
                <span>{formatterPopulation.format(state.Population!)}</span>
              )}
              {measure === Measure.PROPERTY_VALUE && (
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
