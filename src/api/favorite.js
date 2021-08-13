
import client from './client';
import { configureClient } from './client';

const version = 'v1';
const baseURL = `/api/${version}/eventsignup/favsignup`



export const addFavorite = ( token, _id ) => {
	configureClient(token);
	const url = `${baseURL}`;
	return client.put(url, {'eventfavorite': _id })
}


export const removeFavorite = (token, _id) => {
	configureClient(token);
	const url = `${baseURL}`;
	return client.delete(url, { data: { 'eventfavorite': _id } } )
}