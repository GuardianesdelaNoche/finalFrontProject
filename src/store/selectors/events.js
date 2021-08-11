
export const getEvents = (state) => state.events.data;
export const getEventsLoaded = (state) => state.events.loaded;
export const getEventsTotal = (state) => state.events.total;
export const getEventDetail = (state, eventId) => state.events.data.find(event => event._id === eventId);
export const getEventsFavoriteLoaded = (state) => state.events.data;
export const getEventsOwnEventsLoaded = (state) => state.events.data;
export const getEventsAssistantEventsLoaded = (state) => state.events.data;
