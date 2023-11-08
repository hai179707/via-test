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

// Register
export const setStoreName = (payload) => ({
  type: SET_STORE_NAME,
  payload,
});

export const setStoreNameError = (payload) => ({
  type: SET_STORE_NAME_ERROR,
  payload,
});

export const setPhoneNumber = (payload) => ({
  type: SET_PHONE_NUMBER,
  payload,
});

export const setPhoneNumberError = (payload) => ({
  type: SET_PHONE_NUMBER_ERROR,
  payload,
});

export const setEmail = (payload) => ({
  type: SET_EMAIL,
  payload,
});

export const setEmailError = (payload) => ({
  type: SET_EMAIL_ERROR,
  payload,
});

export const setRegisterPassword = (payload) => ({
  type: SET_REGISTER_PASSWORD,
  payload,
});

export const setRegisterPasswordError = (payload) => ({
  type: SET_REGISTER_PASSWORD_ERROR,
  payload,
});

export const setConfirmRegisterPassword = (payload) => ({
  type: SET_CONFIRM_REGISTER_PASSWORD,
  payload,
});

export const setConfirmRegisterPasswordError = (payload) => ({
  type: SET_CONFIRM_REGISTER_PASSWORD_ERROR,
  payload,
});

export const setAddress = (payload) => ({
  type: SET_ADDRESS,
  payload,
});

export const setWard = (payload) => ({
  type: SET_WARD,
  payload,
});

export const setDistrict = (payload) => ({
  type: SET_DISTRICT,
  payload,
});

export const setCity = (payload) => ({
  type: SET_CITY,
  payload,
});

export const setIsAgreePolicy = (payload) => ({
  type: SET_IS_AGREE_POLICY,
  payload,
});

export const setIsAgreePolicyError = (payload) => ({
  type: SET_IS_AGREE_POLICY_ERROR,
  payload,
});

export const setIsOpenRegisterModal = (payload) => ({
  type: SET_IS_OPEN_REGISTER_MODAL,
  payload,
});

export const setRegisterStatus = (payload) => ({
  type: SET_REGISTER_STATUS,
  payload,
});
