import axios from 'axios';
import { setLocalStorage, getLocalStorage } from '../utils/localstorage';
import { GENERAL } from '../configs/constants';
import { REFRESH_TOKEN_ENDPOINT } from '../configs/apiEndpoints'

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    async (config) => {
        if (config.includeToken) {
            const accessToken = getLocalStorage(GENERAL.ACCESS_TOKEN_KEY);
            if (accessToken) {
                config.headers.Authorization = `${GENERAL.BEARER_KEY} ${accessToken}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const refreshToken = getLocalStorage(GENERAL.REFRESH_TOKEN_KEY);
            if (refreshToken) {
                try {
                    const response = await axios.post(REFRESH_TOKEN_ENDPOINT, { refreshToken });
                    const newAccessToken = response.data.data.data.accessToken;
                    setLocalStorage(GENERAL.ACCESS_TOKEN_KEY, newAccessToken);
                    originalRequest.headers.Authorization = `${GENERAL.BEARER_KEY} ${newAccessToken}`;
                    return axios(originalRequest);
                } catch (refreshError) {
                    console.error('Error refreshing token:', refreshError);
                }
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
