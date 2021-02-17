import { restClient } from "../../Utils/client";

const getAll = () => {
  return restClient.get("/employees")
    .then(resp => resp)
    .catch(err => Promise.reject(err));
};

export { getAll };
