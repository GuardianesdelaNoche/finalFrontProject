import client from './client';

const version = 'v1';
const baseURL = `/api/${version}`

export const setRememberPass = (registerData) => {
    const url = `${baseURL}/forgotthepassword`;
    return client.post(url, registerData);
        
}