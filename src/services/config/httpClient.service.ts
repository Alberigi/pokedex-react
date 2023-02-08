import { AxiosInstance } from "axios";
import { IHttpClientService } from "../../domains/interfaces";

export class HttpClientService implements IHttpClientService{
    private clientHttp: AxiosInstance;

    constructor(clientHttp: AxiosInstance) {
        this.clientHttp = clientHttp;
    }

    async post(route: string, data: any): Promise<any> {
        try {
            const result = await this.clientHttp.post(route, data);
            return result.data;
        } catch (error) {
            throw Error(error.response.data.message);
        }
    }

    async get(route:string, params?: any): Promise<any> {
        try {
            const result = await this.clientHttp.get(route, params);
            return result.data;
        } catch (error) {
            throw Error(error.response.data.message);
        }
    }
}