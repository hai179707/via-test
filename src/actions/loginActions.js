import {
  SET_IS_LOGIN,
  SET_SEARCH_VALUE,
} from "../constants";

export const setSearchValue = (payload) => ({
  type: SET_SEARCH_VALUE,
  payload,
});

export const setIsLogin = (payload) => ({
  type: SET_IS_LOGIN,
  payload,
});
