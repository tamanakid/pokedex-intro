import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:3000' // process.env.API_HOST
});

export { api as default };
