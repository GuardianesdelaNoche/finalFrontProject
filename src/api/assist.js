import client from './client';
import { configureClient } from './client';

const version = 'v1';
const baseURL = `/api/${version}/eventsignup/assistsignup`



export const addEventAssist = (token, _id) => {
	configureClient(token);
	const url = `${baseURL}`;
	return client.put(url, { 'eventassistants': _id });
}


export const removeEventAssist = (token, _id) => {
	configureClient(token);
	const url = `${baseURL}`;
	return client.delete(url, { 'eventassistants': _id });
}

