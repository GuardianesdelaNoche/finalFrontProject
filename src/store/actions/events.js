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

export const eventsLoadAction = (page, limit, title) => {
    return async function (dispatch, getState, { api }) {
    console.log("eventsLoadAction", page, limit, title);

      dispatch(eventsLoadedRequest());
          try{
            const events = await api.events.getEventsPage(page, limit, title);
            dispatch(eventsLoadedSuccess(events));
            // set new total 
          }catch(error) {
            // console.log('error en events load action', error)
            // if(error.message.includes('total[0]')){
            //   const customEvents = {
            //     events: [],
            //     total: 0
            //   }
            //   dispatch(eventsLoadedSuccess(customEvents));
            // }else{
              dispatch(eventsLoadedError(error));
            // }
          }
  }
};