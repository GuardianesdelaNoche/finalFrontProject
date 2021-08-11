
import client from './client';
import { configureClient } from './client';

const version = 'v1';
const baseURL = `/api/${version}/eventsignup/favsignup`


//key: addEventFavorite

export const addEventFavorite = (token, eventId) => {
	configureClient(token);
	const url = `${baseURL}`;
	return client.put(url, eventId);
}
