import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";

const config: AxiosRequestConfig = {
  headers: <AxiosRequestHeaders>{
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const axiosIns: AxiosInstance = axios.create(config);

export default axiosIns;
