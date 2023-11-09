import {
  SET_SEARCH_VALUE,
  SET_IS_LOGIN,
} from "../constants";

const initialState = {
  isLogin: JSON.parse(localStorage.getItem("isLogin")) || false,
  searchValue: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      state.searchValue = action.payload;
      break;
    case SET_IS_LOGIN:
      state.isLogin = action.payload;
      localStorage.setItem("isLogin", action.payload);
      break;
    default:
      break;
  }

  return { ...state };
};

export default loginReducer;
