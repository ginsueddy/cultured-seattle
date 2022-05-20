import axios from 'axios';
import { refreshUserIdToken } from './index';
import { SERVER_URL } from '../config';

let idToken = null;

export const setIdToken = (token) => {
    idToken = token;
}

export const getIdToken = () => {
    return idToken;
}

export const get = (endpoint) => {
    return axios.get(endpoint, {
        baseURL: SERVER_URL,
        headers: {
            Authorization: `Bearer ${idToken}`
        }
    }).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`${response.status} Error with GET ${endpoint}`);
        }
    }).catch(async (error) => {
        // seems kinda questionable but seems to hold for now
        if (error.response.status === 403) {
            await refreshUserIdToken();
            return get(endpoint);
        } else {
            console.log('ERROR: get');
            console.log(endpoint);
            throw error
        }
    });
};

export const post = (endpoint, body) => {
    return axios.post(endpoint, body, {
        baseURL: SERVER_URL,
        headers: {
            Authorization: `Bearer ${idToken}`
        }
    }).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`${response.status} Error with POST ${endpoint}`);
        }
    }).catch(async (error) => {
        // seems kinda questionable but seems to hold for now
        if (error.response.status === 403) {
            await refreshUserIdToken();
            return get(endpoint);
        } else {
            console.log('ERROR: get');
            console.log(endpoint);
            throw error
        }
    });
};

export const put = (endpoint, body) => {
    return axios.put(endpoint, body, {
        baseURL: SERVER_URL,
        headers: {
            Authorization: `Bearer ${idToken}`
        }
    }).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`${response.status} Error with PUT ${endpoint}`);
        }
    }).catch(async (error) => {
        // seems kinda questionable but seems to hold for now
        if (error.response.status === 403) {
            await refreshUserIdToken();
            return get(endpoint);
        } else {
            console.log('ERROR: get');
            console.log(endpoint);
            throw error
        }
    });
};

export const deleteReq = (endpoint) => {
    return axios.delete(endpoint, {
        baseURL: SERVER_URL,
        headers: {
            Authorization: `Bearer ${idToken}`
        }
    }).then((response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`${response.status} Error with GET ${endpoint}`);
        }
    }).catch(async (error) => {
        // seems kinda questionable but seems to hold for now
        if (error.response.status === 403) {
            await refreshUserIdToken();
            return get(endpoint);
        } else {
            console.log('ERROR: get');
            console.log(endpoint);
            throw error
        }
    });
};