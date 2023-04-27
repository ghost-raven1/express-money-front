import axios from "axios";
import { AxiosTimeout } from "../utils/constants";

export const API_URL = 'https://prod-dv8m8he4.ew.gateway.dev';
// export const API_URL = 'https://dev1-6gjdyirp.ew.gateway.dev';

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    timeout: AxiosTimeout,
    timeoutErrorMessage: "Сервер не отвечает",
});

api.interceptors.response.use(
    (response) => {
        return response;
    },
)

export default api;