import client from "./client";

const eventsPath = "/api/v1/events";

const mapEvent = ({ photo, ...event }) => {

	console.log(photo);
	return {
		...event,
		// photo: photo ? `${process.env.REACT_APP_API_BASE_URL}${photo}` : photo,
	};
};

export const getEvent = eventId => {
	return client.get(`${eventsPath}/${eventId}`).then(mapEvent);
};


export const deleteEvent = eventId => {
	return client.delete(`${eventsPath}/${eventId}`);
};

