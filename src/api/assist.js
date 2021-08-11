import client from './client';
import { configureClient } from './client';

const version = 'v1';
const baseURL = `/api/${version}/eventsignup/assistsignup`


//key: eventassistants

export const addEventAssist = (token, eventId) => {
	configureClient(token);
	const url = `${baseURL}`;
	return client.put(url, eventId);
}

export const removeEventAssist = (token, eventId) => {
	configureClient(token);
	const url = `${baseURL}`;
	return client.delete(url, eventId);
}