import axios from "axios";
import { AxiosTimeout } from "../utils/constants";

const api = axios.create({
    baseURL: 'https://dev1-6gjdyirp.ew.gateway.dev',
    timeout: AxiosTimeout,
    timeoutErrorMessage: "Сервер не отвечает",
});

api.interceptors.response.use(
    (response) => {
        return response;
    },
)

export default api;