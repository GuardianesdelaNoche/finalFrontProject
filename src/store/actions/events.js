import { types } from "../types/types";

//Load Events
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

export const eventsLoadAction = (page, limit, title, sort, indoor, price, tags, username) => {
    return async function (dispatch, getState, { api }) {
      dispatch(eventsLoadedRequest());
          try{
            const events = await api.events.getEventsPage(page, limit, title, sort, indoor, price, tags, username);
            dispatch(eventsLoadedSuccess(events));
          }catch(error) {
              dispatch(eventsLoadedError(error));
          }
  }
};


//Event Details Actions
export const eventDetailsRequest = () => ({
  type: types.eventDetailsRequest,
})
export const eventDetailsSuccess = (eventId) => ({
  type: types.eventDetailsSuccess,
  payload: eventId
})

export const eventDetailsError = (error) => ({
  type: types.eventDetailsError,
  payload: error
})

export const eventDetailsActions = eventId => {
  return async function (dispatch, getState, {api}) {
    try {
      const eventDetail = await api.events.getEventsDetails(eventId);
      dispatch(eventDetailsSuccess(eventDetail));
      return eventDetail;
    } catch (error) {
      dispatch(eventDetailsError(error));
    }

  }
}


//Delete Event Actions


export const eventDeleteRequest = () => ({
  type: types.eventDeleteRequest,
})
export const eventDeleteSuccess = (eventId) => ({
  type: types.eventDeleteSuccess,
  payload: eventId
})

export const eventDeleteError = (error) => ({
  type: types.eventDeleteError,
  payload: error
})


export const eventDeleteActions = eventId => {
  return async function (dispatch, getState, { api, history }) {
    dispatch(eventDeleteRequest())
    try {
      const removeEvent = await api.events.deleteEvent(eventId);
      dispatch(eventDeleteSuccess(removeEvent));
      history.push('/');
    } catch (error) {
      dispatch(eventDeleteError(error));
    }

  }
}
