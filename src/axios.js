import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_API || 'http://localhost:5000/',
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) =>
    // eslint-disable-next-line prefer-promise-reject-errors
    Promise.reject(
      error.response
        ? {
            ...error.response.data,
            status: error.response.status,
          }
        : {
            message: 'Something went wrong',
          }
    )
);

export default axiosInstance;
