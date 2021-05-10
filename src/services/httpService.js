import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response && error.response >= 400 && error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("예상치 못한 오류가 발생했습니다");
    // network / server / db error, bug occurred
  }

  return Promise.reject(error);
});

// Prevent Bi-directional Dependency with authService.js
function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
