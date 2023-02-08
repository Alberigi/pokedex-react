export abstract class IHttpClientService {
    abstract get(route: string, params?: string): Promise<any>
    
    abstract post(route: string, data: any): Promise<any>
}