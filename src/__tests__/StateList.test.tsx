/* Libraries */
import { render, screen } from "@testing-library/react";
/* Components */

import { StateList } from "../components";

test('show loader when it"s fetching data', async () => {
  render(<StateList />);

  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
