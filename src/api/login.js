import client, { configureClient, resetClient } from './client';
import storage from '../utils/storage';

const version = 'v1';
const baseURL = `/api/${version}/user`


export const login = ({ remember, ...credentials }) => {
	return client
		.post(`${baseURL}/login`, credentials)
		.then(( token ) => {
			configureClient(token);
			return token;
		})
		.then(accessToken => {
			if (remember) {
				storage.set('auth', accessToken);
			}
		});
};

export const logout = () => {
	return Promise.resolve().then(resetClient).then(storage.clear);
};
