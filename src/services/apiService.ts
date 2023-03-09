import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getStates = async (measure: string, year: number) => {
  const res = await axios.get(API_URL + `${measure}&year=${year}`);
  return res.data;
};
