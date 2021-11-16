import { currentUser } from '../Common/Helper';
import * as api from './api';

const baseUrl = process.env.REACT_APP_API_URL + '/users';


export const login = (u, p) =>
    api.post(`${baseUrl}/authenticate`, {
        username: "testtomek",
        password: "testtomek1020jaja"
    })



export const refresh = () => {
    const user = currentUser();
    api.post(`${baseUrl}/authenticate`, JSON.stringify({ token: user.token, refreshToken: user.refreshToken }))
}