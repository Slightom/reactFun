export const SESSION_TIME = 60 * 15; // in seconds

export function currentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

export function authHeader() {
    // return authorization header with jwt token
    const _currentUser = currentUser();
    if (_currentUser && _currentUser.token) {
        return { Authorization: `Bearer ${_currentUser.token}` };
    } else {
        return {};
    }
}

export function generateHeaders(withAuth) {
    let result = { "content-type": "application/json" };
    if (withAuth) {
        const auth = authHeader();
        result = { ...result, "Authorization": auth.Authorization };
    }

    return result;
}

export function setUserAndTokenData(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    const now = new Date();
    localStorage.setItem('dateTokenActive', now);
}