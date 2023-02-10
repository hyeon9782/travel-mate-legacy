import axios from 'axios';

const { REACT_APP_API_END_POINT } = process.env;

const instance = axios.create({
  baseURL: REACT_APP_API_END_POINT,
});

export { instance };