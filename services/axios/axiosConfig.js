// axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    // Add any other common headers here
  },
});

//? Request interceptor
instance.interceptors.request.use(
  config => {
    const authToken = 'your_authentication_token';
    config.headers.Authorization = `Bearer ${authToken}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

//? Response interceptor
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (!error.response) {
      // Network error
      console.error('Network error:', error.message);
      return Promise.reject(
        'Network error. Please check your internet connection.',
      );
    }

    const {status} = error.response;

    switch (status) {
      case 400:
        return Promise.reject(
          'Bad request. Please check your request parameters.',
        );
      case 401:
        return Promise.reject('Unauthorized. Please login again.');
      case 403:
        return Promise.reject(
          'Forbidden. You do not have permission to access this resource.',
        );
      case 404:
        return Promise.reject(
          'Not found. The requested resource does not exist.',
        );
      case 500:
        return Promise.reject('Internal server error. Please try again later.');
      default:
        return Promise.reject(`An error occurred with status: ${status}`);
    }
  },
);

export default instance;
