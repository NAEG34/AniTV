import axios from "axios";
import { selectUserAgent } from "../utils/agent";

export const api = axios.create({
  baseURL: "https://appanimeplus.tk",
  // headers: {
  //   "Content-type": "application/json",
  // },
});

// api.interceptors.request.use(async (config) => {
//   config.headers["user-agent"] = selectUserAgent();

//   return config;
// });

export const api2 = axios.create({
  baseURL: "https://kitsu.io",
  Accept: "application/vnd.api+json",
  "Content-Type": "application/vnd.api+json",
});
