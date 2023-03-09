/* Libraries */
import { Suspense, lazy, useContext } from "react";

/* Components */
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import { Loading } from "./components";
import { MeasureFilterContext } from "./context";

/* Styles */
import "./App.scss";
import { Measure, MeasureFilterContextType } from "./types";

const StateList = lazy(() => import("./components/StateList/StateList"));

function App() {
  const { filters, setFilters } = useContext(
    MeasureFilterContext
  ) as MeasureFilterContextType;

  return (
    <div className="app">
      <div className="formPanel">
        <Container className="p-3">
          <Nav>
            <Nav.Item className="logo">
              <img
                src="/images/lative-logo.svg"
                alt="Lative Software"
              />
            </Nav.Item>
          </Nav>
          <h1 className="header">Growth Ranking of U.S. States</h1>
          <Form>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={(event) =>
                      setFilters({ ...filters, year: +event.target.value })
                    }
                  >
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Measure</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={(event) =>
                      setFilters({ ...filters, measure: event.target.value })
                    }
                  >
                    <option value={Measure.HOUSEHOLD_INCOME}>
                      {Measure.HOUSEHOLD_INCOME}
                    </option>
                    <option value={Measure.POPULATION}>
                      {Measure.POPULATION}
                    </option>
                    <option value={Measure.PROPERTY_VALUE}>
                      {Measure.PROPERTY_VALUE}
                    </option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Growth Period</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={(event) =>
                      setFilters({
                        ...filters,
                        growthPeriod: +event.target.value,
                      })
                    }
                  >
                    <option value="1">1 Year</option>
                    <option value="2">2 Years</option>
                    <option value="3">3 Years</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
      <div className="results">
        <Container>
          <Suspense fallback={<Loading></Loading>}>
            <StateList />
          </Suspense>
        </Container>
      </div>
    </div>
  );
}

export default App;
