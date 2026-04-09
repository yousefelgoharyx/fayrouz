import axios from "axios";

export const httpAgent = axios.create({
  baseURL: process.env.SERVER_URL,
});
