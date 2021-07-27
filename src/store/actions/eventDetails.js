import { types } from "../types/types";
import { getEventDetail } from '../selectors/eventDetails'


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
  return async function (dispatch, getState, { api}) {
    try {
      const eventDetail = await api.events.getEvents(eventId);
      dispatch(eventDetailsSuccess(eventDetail));
      return eventDetail;
    } catch (error) {
      dispatch(eventDetailsError(error));
    }
  
  }
}
