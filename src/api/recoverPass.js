import client from './client';

const version = 'v1';
const baseURL = `/api/${version}/user`

export const setRecover = (recoverData) => {
    const url = `${baseURL}/recover`;
    return client.post(url, recoverData);
        
}