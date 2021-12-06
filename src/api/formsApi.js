import { currentUser } from '../common/Helper';
import * as api from './api';

const baseUrl = process.env.REACT_APP_API_URL + '/forms/';


export const getForms = (u, p) =>
    api.get(`${baseUrl}`)