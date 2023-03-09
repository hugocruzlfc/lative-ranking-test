import { rest } from "msw";
import { apiResponseData } from "../__fixtures__";

export const handlers = [
  rest.get(
    "https://datausa.io/api/data?drilldowns=State&measures=Household%20Income&year=2019",
    (req, res, ctx) => {
      return res(ctx.json(apiResponseData));
    }
  ),
];
