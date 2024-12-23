import { ApiError } from "../../types/apiResult/apiError";

const setPreviousSessionKeyInLocalStorage = (value: string) => {
  window.localStorage.setItem(PREVIOUS_SESSION_KEY, value);
};

const getPreviousSessionKeyFromLocalStorage = () => {
  return window.localStorage.getItem(PREVIOUS_SESSION_KEY) === "true";
};

const removePreviousSessionKeyFromLocalStorage = () => {
  window.localStorage.removeItem(PREVIOUS_SESSION_KEY);
};

const isKnownTemporaryError = (error: unknown) => {
  if (error instanceof ApiError && error.status === 400) return true;
  return false;
};

const PREVIOUS_SESSION_KEY = "previousSession";

export default {
  setPreviousSessionKeyInLocalStorage,
  getPreviousSessionKeyFromLocalStorage,
  removePreviousSessionKeyFromLocalStorage,
  isKnownTemporaryError,
};
