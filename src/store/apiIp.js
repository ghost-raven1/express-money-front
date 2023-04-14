import axios from "axios";
import { AxiosTimeout } from "../utils/constants.js";

const apiIp = axios.create({
    baseURL: 'https://ipapi.co',
    timeout: AxiosTimeout,
    timeoutErrorMessage: 'Сервер не отвечает'
})

apiIp.interceptors.response.use(
    (response) => {
        return response;
    }
)

export default apiIp;