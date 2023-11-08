import {
  SET_IS_LOGIN,
  SET_LOGIN_PASSWORD,
  SET_LOGIN_PASSWORD_ERROR,
  SET_LOGIN_USERNAME,
  SET_LOGIN_USERNAME_ERROR,
  SET_SEARCH_VALUE,
} from "../constants";

export const setLoginUsername = (payload) => ({
  type: SET_LOGIN_USERNAME,
  payload,
});

export const setLoginUsernameError = (payload) => ({
  type: SET_LOGIN_USERNAME_ERROR,
  payload,
});

export const setLoginPassword = (payload) => ({
  type: SET_LOGIN_PASSWORD,
  payload,
});

export const setLoginPasswordError = (payload) => ({
  type: SET_LOGIN_PASSWORD_ERROR,
  payload,
});

export const setSearchValue = (payload) => ({
  type: SET_SEARCH_VALUE,
  payload,
});

export const setIsLogin = (payload) => ({
  type: SET_IS_LOGIN,
  payload,
});
