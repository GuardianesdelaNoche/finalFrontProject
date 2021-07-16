import { types } from "../types/types";

export const eventsLoadedRequest = () => ({
	type: types.eventsLoadedRequest
});

export const eventsLoadedSuccess = (events) => ({
	type: types.eventsLoadedSuccess,
	payload: {
		data: events.events,
		total: events.total
	}
});

export const eventsLoadedError = error => ({
	type: types.eventsLoadedError,
	payload: error
});

export const eventsLoadAction = () => {
	return async function (dispatch, getState, { api }) {
		dispatch(eventsLoadedRequest());
		try {
			const events = await api.events.getEvents();
			dispatch(eventsLoadedSuccess(events));
		} catch (error) {
			dispatch(eventsLoadedError(error));
		}
	}
};

//Details Actions 

export const eventDetailsRequest = () => ({
	type: types.eventDetailsRequest,
})
export const eventDetailsSuccess = (eventId) => ({
	type: types.eventDetailsSuccess,
	payload: eventId
})

export const eventDetailsError = (error) => ({
	type: types.eventDetailsError,
	payload:error
})

export const eventDetailsActions = eventId =>{
	return async function (dispatch, getState, { api }) {
		dispatch(eventDetailsRequest());
		try {
			const eventDetail = await api.events.getEvent(eventId);
			dispatch(eventDetailsSuccess(eventDetail));
			return eventDetail;
			
		} catch (error) {
			dispatch(eventDetailsError(error));
		}
	}
}

export const eventDeleteActions = ()=>{

}