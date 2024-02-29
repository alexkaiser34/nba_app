import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { fetchMethod } from "../types/api";
import { registeredEndpoints } from "../types/endpoints";

// const baseURL = 'http://nbaappbackend.us-east-1.elasticbeanstalk.com';
const baseURL = 'http://localhost:3000';



export function fetch<TData, TParam>(
    endpoints: registeredEndpoints,
    params?: TParam,
    method?: fetchMethod
): Promise<TData> {
    return new Promise((resolve, reject) => {
        try {
            const options: AxiosRequestConfig = {
                method: method === undefined ? 'GET' : method,
                url: baseURL + endpoints,
                headers: {
                    "Content-Type": 'application/json',
                },
                params: params
            };
            axios.request(options)
            .then((response: AxiosResponse) => {
                const tmp = JSON.parse(JSON.stringify(response.data));
                resolve(tmp as TData);
            })
            .catch((err:any) => {
                reject(err);
            })
        }
        catch(e: any) {
            console.log(e);
            reject(e);
        }
    });
}