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

export const eventsLoadAction = (page, limit, title, sort, indoor, price, tags) => {
    return async function (dispatch, getState, { api }) {
      dispatch(eventsLoadedRequest());
          try{
            const events = await api.events.getEventsPage(page, limit, title, sort, indoor, price, tags);
            dispatch(eventsLoadedSuccess(events));
          }catch(error) {
              dispatch(eventsLoadedError(error));
          }
  }
};

/** BACK 3008 */

// Load Favorites
export const eventsFavoriteLoadedRequest = () => ({
  type: types.eventsFavoriteLoadedRequest
});

export const eventsFavoriteLoadedSuccess = (events) => ({
  type: types.eventsFavoriteLoadedSuccess,
  payload: {
    data: events.events,
    total: events.total
  }
});

export const eventsFavoriteLoadedError = error => ({
  type: types.eventsFavoriteLoadedError,
  payload: error
});

//export const eventsFavoriteLoadAction = (token) => {
export const eventsFavoriteLoadAction = () => {

  return async function (dispatch, getState, { api }) {
        try{
          //const events = await api.events.getEventsPage(page, limit);
          const eventsFavorite = await api.events.getEventsFavorite();
          //const eventsFavorite = await api.events.getEventsFavorite();
          dispatch(eventsFavoriteLoadedSuccess(eventsFavorite));
          // set new total 
        }catch(error) {
          dispatch(eventsFavoriteLoadedError(error));
        }
}
};


// Load My events created
export const eventsOwnLoadedRequest = () => ({
  type: types.eventsOwnLoadedRequest
});

export const eventsOwnLoadedSuccess = (events) => ({
  type: types.eventsOwnLoadedSuccess,
  payload: {
    data: events.events,
    total: events.total
  }
});

export const eventsOwnLoadedError = error => ({
  type: types.eventsOwnLoadedError,
  payload: error
});

//export const eventsFavoriteLoadAction = (token) => {
export const eventsOwnLoadAction = () => {

  return async function (dispatch, getState, { api }) {
        try{
          //const events = await api.events.getEventsPage(page, limit);
          const eventsOwn = await api.events.getEventsOwn();
          //const eventsFavorite = await api.events.getEventsFavorite();
          dispatch(eventsOwnLoadedSuccess(eventsOwn));
          // set new total 
        }catch(error) {
          dispatch(eventsOwnLoadedError(error));
        }
}
};

// Load Suscribed
export const eventsAssistantLoadedRequest = () => ({
  type: types.eventsAssistantLoadedRequest
});

export const eventsAssistantLoadedSuccess = (events) => ({
  type: types.eventsAssistantLoadedSuccess,
  payload: {
    data: events.events,
    total: events.total
  }
});

export const eventsAssistantLoadedError = error => ({
  type: types.eventsAssistantLoadedError,
  payload: error
});

//export const eventsFavoriteLoadAction = (token) => {
export const eventsAssistantLoadAction = () => {

  return async function (dispatch, getState, { api }) {
        try{
          //const events = await api.events.getEventsPage(page, limit);
          const eventsAssistant = await api.events.getEventsAssistant();
          //const eventsFavorite = await api.events.getEventsFavorite();
          dispatch(eventsAssistantLoadedSuccess(eventsAssistant));
          // set new total 
        }catch(error) {
          dispatch(eventsAssistantLoadedError(error));
        }
}
};

//==============================================================


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
