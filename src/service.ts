import axios, { AxiosResponse } from "axios";

export const baseUrl =
  "https://free-ap-south-1.cosmocloud.io/development/api/employees";

const request = async (
  method: string,
  url: string,
  data?: any
): Promise<AxiosResponse> => {
  let headers = {
    projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
    environmentId: import.meta.env.VITE_REACT_APP_ENV_ID,
  };

  const config: any = {
    headers,
  };

  if (method === "GET") {
    return await axios.get(`${baseUrl}${url}`, config);
  } else if (method === "POST") {
    return await axios.post(`${baseUrl}${url}`, data, config);
  } else if (method === "DELETE") {
    return await axios.delete(`${baseUrl}${url}`, { ...config, data: {} });
  }
};

export const getEmployeeList = (limit, offset) => {
  return request("GET", `?limit=${limit}&offset=${offset}`);
};

export const deleteEmployee = (id) => {
  return request("DELETE", `/${id}`);
};

export const addNewEmployee = (body) => {
  return request("POST", ``, body);
};
