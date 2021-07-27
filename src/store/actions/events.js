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

export const eventsLoadAction = (page, limit) => {
    return async function (dispatch, getState, { api }) {
          try{
            const events = await api.events.getEventsPage(page, limit);
            dispatch(eventsLoadedSuccess(events));
            // set new total 
          }catch(error) {
            dispatch(eventsLoadedError(error));
          }
  }
};


