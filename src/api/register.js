import client from './client';

const version = 'v1';
const baseURL = `/api/${version}/user`

export const setRegister = (registerData) => {
    const url = `${baseURL}/register`;
    return client.post(url, registerData);
        
}