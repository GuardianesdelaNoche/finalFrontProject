import client from './client';

const version = 'v1';
const baseURL = `/api/${version}/user`

export const setRegister = (registerData) => {
    console.log("llamando");
    const url = `${baseURL}/register`;
    return client.post(url, registerData);
        
}