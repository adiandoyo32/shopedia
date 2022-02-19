import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from "axios";
import { HttpRequest, HttpResponse } from "../http/http-config";

const config: AxiosRequestConfig = {
    headers: <AxiosRequestHeaders>{
        Accept: "application/json",
        "Content-Type": "application/json",
    },
};

export const axiosIns: AxiosInstance = axios.create(config);

export const axiosHttpAdapter = <R, B = any>(config: HttpRequest<B>) => {
    const { url, method, data } = config;
    return axiosIns.request<any, AxiosResponse<HttpResponse<R>>>({
        url,
        method,
        data,
    });
};
