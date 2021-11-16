import * as api from './api';

const baseUrl = process.env.REACT_APP_API_URL + '/seniors/';


export const getSeniors = (u, p) =>
    api.get(`${baseUrl}`);

export const getSenior = (id) =>
    api.get(`${baseUrl}${id}`);