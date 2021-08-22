import { types } from "../types/types";

const initialState = {
  loading: false,
  error: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLoginRequest:
    case types.eventsLoadedRequest:
    case types.eventsFavoriteLoadedRequest:
    case types.eventsOwnLoadedRequest:
    case types.eventsAssistantLoadedRequest:
    case types.uiSetLoading:
      return { ...state, loading: true, error: null };
    case types.authLoginSuccess:
    case types.eventsLoadedSuccess:
    case types.eventsFavoriteLoadedSuccess:
    case types.eventsOwnLoadedSuccess:
    case types.eventsAssistantLoadedSuccess:
    case types.uiResetLoading:
      return { ...state, loading: false };
    case types.authLoginError:
    case types.eventsLoadedError:
    case types.eventsFavoriteLoadedError:
    case types.eventsOwnLoadedError:
    case types.eventsAssistantLoadedError:
      return { ...state, loading: false, error: action.payload };
    case types.uiSetError:
      return { ...state, loading: false, error: action.data};
    case types.uiResetError:
      return { ...state, error: null };
    default:
      return state;
  }
};
