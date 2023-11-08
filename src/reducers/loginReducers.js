import {
  SET_LOGIN_USERNAME,
  SET_LOGIN_PASSWORD,
  SET_SEARCH_VALUE,
  SET_IS_LOGIN,
  SET_LOGIN_USERNAME_ERROR,
  SET_LOGIN_PASSWORD_ERROR,
} from "../constants";

const initialState = {
  isLogin: JSON.parse(localStorage.getItem("isLogin")) || false,
  loginUsername: {
    value: "",
    error: false,
    helperText: "",
  },
  loginPassword: {
    value: "",
    error: false,
    helperText: "",
  },
  searchValue: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_USERNAME:
      state.loginUsername.value = action.payload;
      break;
    case SET_LOGIN_USERNAME_ERROR:
      state.loginUsername.error = action.payload.error;
      state.loginUsername.helperText = action.payload.helperText;
      break;
    case SET_LOGIN_PASSWORD:
      state.loginPassword.value = action.payload;
      break;
    case SET_LOGIN_PASSWORD_ERROR:
      state.loginPassword.error = action.payload.error;
      state.loginPassword.helperText = action.payload.helperText;
      break;
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
