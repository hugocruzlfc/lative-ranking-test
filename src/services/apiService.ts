import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getStates = async (measures: string, year: string) => {
  const res = await axios.get(API_URL + `${measures}&year=${year}`);
  return res.data;
};
