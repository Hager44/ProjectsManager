import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://6a15afdc91ff9a63de089de2.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});
