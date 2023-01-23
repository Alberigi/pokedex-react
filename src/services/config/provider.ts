import axios from 'axios';
import { HttpClientService } from './httpClient.service';

const axiosClient = axios.create({
    baseURL: 'http://localhost:4000'
});

export const httpClientService = new HttpClientService(axiosClient);