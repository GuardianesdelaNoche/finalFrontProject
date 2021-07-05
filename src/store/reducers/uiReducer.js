import { types } from "../types/types";

const initialState = {
  loading: false,
  error: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLoginRequest:
      return { ...state, loading: true, error: null };
    case types.authLoginSuccess:
      return { ...state, loading: false, error: null };
    case types.authLoginError:
      return { ...state, loading: false, error: action.payload };
    case types.uiResetError:
      return { ...state, error: null };
    default:
      return state;
  }
};
