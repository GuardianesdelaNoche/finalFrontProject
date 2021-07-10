import client, { configureClient } from './client';
import storage from '../utils/storage';

const version = 'v1';
const baseURL = `https://services.4events.net/api/${version}/user`

export const login = ({ remember, ...credentials}) => {

	const url = `${baseURL}/login`;
	return client.post(url, credentials).then(({ accessToken }) => {
		configureClient({ accessToken });
		return accessToken;
	})
		.then(accessToken => {
			if (remember) {
				storage.set('auth', accessToken);
			}
		}); 
}

