import { types } from "../types/types";

export const resetErrorAction = () => {
    return {
      type: types.uiResetError
    };
  };

export const setLoadingAction = () => {
  return {
    type: types.uiSetLoading
  };
};

export const setErrorAction = error => {
  return {
    type: types.uiSetError
  };
};

export const resetLoadingAction = () => {
  return {
    type: types.uiResetLoading
  };
};