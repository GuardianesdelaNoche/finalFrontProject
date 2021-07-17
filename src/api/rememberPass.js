import client from './client';

const version = 'v1';
const baseURL = `/api/${version}/users`

export const setRememberPass = (registerData) => {
    const url = `${baseURL}/recoverpass`;
    return client.post(url, registerData);        
}