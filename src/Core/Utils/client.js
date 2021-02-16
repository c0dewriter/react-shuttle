import axios from "axios";

const BASE_API_URL = "https://jsonplaceholder.typicode.com";
const TOKEN        = localStorage.getItem("bearerToken");
const TOKEN_TYPE   = "Bearer";

// https://github.com/axios/axios#axioscreateconfig
const restClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Authorization": `${TOKEN_TYPE} ${TOKEN}`,
    "Access-Control-Expose-Headers": "Content-Disposition"
  },
  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: false,
  // responseType: "json",
  responseEncoding: "utf8",
});

restClient.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

restClient.interceptors.request.use((config) => {
  // Do something before request is sent. For example check if `config.data` is a FormData instance.
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

export { restClient };
