import axios from "axios";

export const axiosInstance = axios.create({
  timeout: 15000,
  headers: { "Content-Type": "application/json" },
});

export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method,
    url,
    data: bodyData ?? undefined,
    headers: headers ?? undefined,
    params: params ?? undefined,
  });
};
