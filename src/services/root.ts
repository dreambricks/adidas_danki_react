import axios from "axios";

const BASE_API = "http://18.231.142.136:5050/";

export const API = axios.create({
  baseURL: BASE_API,
});
