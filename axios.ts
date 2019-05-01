import axios, { AxiosError } from 'axios';

const errorInterceptor = (error: AxiosError) => {
    if (error.response) {
        console.log(error.response.status)
    }
};

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
});

axiosInstance.interceptors.response.use(response => response, errorInterceptor);

export { axiosInstance };
