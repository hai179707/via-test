import {
  SET_STORE_NAME,
  SET_PHONE_NUMBER,
  SET_EMAIL,
  SET_REGISTER_PASSWORD,
  SET_CONFIRM_REGISTER_PASSWORD,
  SET_ADDRESS,
  SET_WARD,
  SET_DISTRICT,
  SET_CITY,
  SET_IS_AGREE_POLICY,
  SET_IS_OPEN_REGISTER_MODAL,
  SET_REGISTER_STATUS,
  SET_STORE_NAME_ERROR,
  SET_PHONE_NUMBER_ERROR,
  SET_EMAIL_ERROR,
  SET_REGISTER_PASSWORD_ERROR,
  SET_CONFIRM_REGISTER_PASSWORD_ERROR,
  SET_IS_AGREE_POLICY_ERROR,
} from "../constants";

const initialState = {
  storeName: {
    value: "",
    error: false,
    helperText: "",
  },
  phoneNumber: {
    value: "",
    error: false,
    helperText: "",
  },
  email: {
    value: "",
    error: false,
    helperText: "",
  },
  registerPassword: {
    value: "",
    error: false,
    helperText: "",
  },
  confirmRegisterPassword: {
    value: "",
    error: false,
    helperText: "",
  },
  address: {
    value: "",
    error: false,
    helperText: "",
  },
  ward: {
    name: "",
    code: "",
    error: false,
    helperText: "",
  },
  district: {
    name: "",
    code: "",
    error: false,
    helperText: "",
  },
  city: {
    name: "",
    code: "",
    error: false,
    helperText: "",
  },
  isAgreePolicy: {
    value: false,
    error: false,
  },
  isOpenRegisterModal: false,
  registerStatus: false,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STORE_NAME:
      state.storeName.value = action.payload;
      break;
    case SET_STORE_NAME_ERROR:
      state.storeName.error = action.payload.error;
      state.storeName.helperText = action.payload.helperText;
      break;
    case SET_PHONE_NUMBER:
      state.phoneNumber.value = action.payload;
      break;
    case SET_PHONE_NUMBER_ERROR:
      state.phoneNumber.error = action.payload.error;
      state.phoneNumber.helperText = action.payload.helperText;
      break;
    case SET_EMAIL:
      state.email.value = action.payload;
      break;
    case SET_EMAIL_ERROR:
      state.email.error = action.payload.error;
      state.email.helperText = action.payload.helperText;
      break;
    case SET_REGISTER_PASSWORD:
      state.registerPassword.value = action.payload;
      break;
    case SET_REGISTER_PASSWORD_ERROR:
      state.registerPassword.error = action.payload.error;
      state.registerPassword.helperText = action.payload.helperText;
      break;
    case SET_CONFIRM_REGISTER_PASSWORD:
      state.confirmRegisterPassword.value = action.payload;
      break;
    case SET_CONFIRM_REGISTER_PASSWORD_ERROR:
      state.confirmRegisterPassword.error = action.payload.error;
      state.confirmRegisterPassword.helperText = action.payload.helperText;
      break;
    case SET_ADDRESS:
      state.address.value = action.payload;
      break;
    case SET_WARD:
      state.ward.code = action.payload.code;
      state.ward.name = action.payload.name;
      break;
    case SET_DISTRICT:
      state.district.code = action.payload.code;
      state.district.name = action.payload.name;
      break;
    case SET_CITY:
      state.city.code = action.payload.code;
      state.city.name = action.payload.name;
      break;
    case SET_IS_AGREE_POLICY:
      state.isAgreePolicy.value = action.payload;
      break;
    case SET_IS_AGREE_POLICY_ERROR:
      state.isAgreePolicy.error = action.payload.error;
      break;
    case SET_IS_OPEN_REGISTER_MODAL:
      state.isOpenRegisterModal = action.payload;
      break;
    case SET_REGISTER_STATUS:
      state.registerStatus = action.payload;
      if(action.payload) {
        state.storeName.value = ''
        state.phoneNumber.value = ''
        state.email.value = ''
        state.registerPassword.value = ''
        state.confirmRegisterPassword.value = ''
        state.address.value = ''
        state.ward.value = ''
        state.district.value = ''
        state.city.value = ''
        state.isAgreePolicy.value = false
      }
      break;
    default:
      break;
  }

  return { ...state };
};

export default registerReducer;
