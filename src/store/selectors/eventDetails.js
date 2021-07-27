
export const getEventDetail = (state) => state.events.data;
export const getEventDetailbyID = (state, eventId) => state.events.data.find(event => event._id === eventId);
