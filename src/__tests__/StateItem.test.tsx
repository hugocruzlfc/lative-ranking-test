/* Libraries */
import { render, screen } from "@testing-library/react";
/* Components */

import { StateItem } from "../components";
import { apiResponseData } from "../__fixtures__";
test("show name State when the component is load", () => {
  render(<StateItem state={apiResponseData.data[0]} />);

  const linkElement = screen.getByText(/CALIFORNIA/i);
  expect(linkElement).toBeInTheDocument();
});
