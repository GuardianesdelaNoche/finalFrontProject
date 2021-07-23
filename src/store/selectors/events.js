
export const getEvents = (state) => state.events.data;
export const getEventsLoaded = (state) => state.events.loaded;
export const getEventDetail = (state, eventId) => state.events.data.find(event => event.id === eventId);
export const getEventsTotal = (state) => state.events.total;

