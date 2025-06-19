import axios from "axios";

export const axiosInstance = axios.create({}); // create method se koi bhi type ki request bhej sakte hai ie,get,post,put,patch,delete

export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};
