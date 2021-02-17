import axios from "axios";

const BASE_API_URL = "https://dummy.restapiexample.com/api/v1";
const TOKEN        = localStorage.getItem("bearerToken");
const TOKEN_TYPE   = "Bearer";

// https://github.com/axios/axios#axioscreateconfig
const restClient = axios.create({
  baseURL: BASE_API_URL,
  method: "GET",
  headers: {
    "Authorization": TOKEN ? `${TOKEN_TYPE} ${TOKEN}` : undefined,
  },
  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: false,
  responseType: "text",
  responseEncoding: "utf8",
});

restClient.interceptors.request.use((config) => {
  // Do something before request is sent. For example check if `config.data` is a FormData instance.
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

restClient.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  switch (response.status) {
  case 200:
  case 201:
  case 204:
    return response.data;
  }
}, (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  switch (error.status) {
  case 401:
    return Promise.reject({...error, errType: "unauthorized"});
  case 403:
    return Promise.reject({...error, errType: "forbidden"});
  case 500:
    return Promise.reject({...error, errType: "poo"});
  default:
    return Promise.reject({...error, errType: "unknown"});
  }
});

export { restClient };
