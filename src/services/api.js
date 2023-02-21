import axios from "axios";
import { selectUserAgent } from "../utils/agent";

export const api = axios.create({
  baseURL: "https://appanimeplus.tk",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Origin": "*",
  },
});

api.interceptors.request.use(async (config) => {
  config.headers["user-agent"] = selectUserAgent();

  return config;
});

export const api2 = axios.create({
  baseURL: "https://kitsu.io",
  headers: {
    "Content-Type": "application/vnd.api+json",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Origin": "*",
  },
});

api2.interceptors.request.use(async (config) => {
  config.headers["user-agent"] = selectUserAgent();

  return config;
});
