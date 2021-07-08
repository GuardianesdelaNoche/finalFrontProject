import { types } from "../types/types";

export const eventsLoadedRequest = () => ({
    type: types.eventsLoadedRequest
});

export const eventsLoadedSuccess = () => ({
    type: types.eventsLoadedSuccess
});

export const eventsLoadedError = error => ({
    type: types.eventsLoadedError,
    payload: error
});

export const eventsLoadAction = (setterEvents) => {
    return async function (dispatch, getState, { api }) {
      dispatch(eventsLoadedRequest());
          try{
            const events = await require('../../components/events/EventsPage/data.json').events;
            dispatch(eventsLoadedSuccess());
            setterEvents(events);
          }catch(error) {
            dispatch(eventsLoadedError(error));
          }
  }
};