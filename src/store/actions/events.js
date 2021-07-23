import { types } from "../types/types";
import { getEventDetail } from '../selectors/events'

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

export const eventsLoadAction = (page, limit) => {
    return async function (dispatch, getState, { api }) {
      dispatch(eventsLoadedRequest());

          try{
            const events = await api.events.getEventsPage(page, limit);
            dispatch(eventsLoadedSuccess(events));
            // set new total 
          }catch(error) {
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
  payload: error
})

export const eventDetailsActions = eventId => {
  return async function (dispatch, getState, { api }) {
   const eventDetailLoad = getEventDetail(getState(), eventId);
    if (eventDetailLoad) {
      return;
    } 
    dispatch(eventDetailsRequest());
    try {
      const eventDetail = await api.events.getEvents(eventId);
      dispatch(eventDetailsSuccess(eventDetail));
      return eventDetail;
    } catch (error) {
      dispatch(eventDetailsError(error));
    }
  
  }
}