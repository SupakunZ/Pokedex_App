import { AxiosResponse, AxiosError } from "axios";

export interface IResponse {
    status: number | undefined
    error?: 
    | AxiosError<AxiosResponse<any, any>, any> 
    | AxiosResponse<AxiosResponse<any, any>, any >
    | undefined
}

export const handleResponse = {
    success: (res: AxiosResponse) => {
        return {
            status: res.status,
            data: res.data,
        }
    },
    error: (res: AxiosError<AxiosResponse>): IResponse => {
        if (res.message === 'Network Error') {
            return {
                status: 500,
                error: res,
            }
        } else {
            return {
                status: res.response?.status,
                error: res.response?.data,
            }
        }
    },
}