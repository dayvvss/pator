import axios from 'axios';

const API_BASE_URL = 'https://pator-2c7e229d56e1.herokuapp.com/';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;

export const endpoints = {
  login: '/auth/login/',
  
};