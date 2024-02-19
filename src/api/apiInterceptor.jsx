import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 5000, // Adjust timeout as needed
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add authorization token to headers if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Modify response data or handle successful responses
    return response;
  },
  (error) => {
    // Handle response errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const errorMessage = error.response.data.message || 'An error occurred';
      // You can use a notification library to display error messages to the user
      // Example: showNotification(errorMessage, 'error');
    } else if (error.request) {
      // The request was made but no response was received
      // You can handle this case differently, such as showing a custom error page
      // Example: navigateToErrorPage();
    } else {
      // Something happened in setting up the request that triggered an Error
      const errorMessage = 'An error occurred while processing your request';
      // You can use a notification library to display error messages to the user
      // Example: showNotification(errorMessage, 'error');
    }
    return Promise.reject(error);
  }
);

export default api;
