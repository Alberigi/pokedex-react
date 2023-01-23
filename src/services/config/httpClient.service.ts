export class HttpClientService {
    private clientHttp: any;

    constructor(clientHttp: any) {
        this.clientHttp = clientHttp;
    }

    async post(route, data) {
        try {
            const result = await this.clientHttp.post(route, data);
            return result.data;
        } catch (error) {
            throw Error(error.response.data.message);
        }
    }

    async get(route, params) {
        try {
            const result = await this.clientHttp.get(route, params);
            return result.data;
        } catch (error) {
            throw Error(error.response.data.message);
        }
    }
}