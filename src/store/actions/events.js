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