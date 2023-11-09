import {
  SET_IS_OPEN_FORGET_PASSWORD_MODAL,
  SET_FORGET_PASSWORD_USERNAME,
  SET_NEW_PASSWORD,
  SET_MODAL_TITLE,
  SET_CURRENT_STEP_FORGET_PASSWORD_MODAL,
  SET_NUM_CODE_1,
  SET_NUM_CODE_2,
  SET_NUM_CODE_3,
  SET_NUM_CODE_4,
  SET_NUM_CODE_5,
  SET_NUM_CODE_6,
  SET_IS_CORRECT_CODE,
  SET_CLOSE_FORGET_PASSWORD_MODAL_TIME,
  COUNTDOWN_CLOSE_FORGET_PASSWORD_MODAL_TIME,
  SET_CODE_TIMEOUT,
  COUNTDOWN_CODE_TIMEOUT,
  SET_CORRECT_CODE,
} from "../constants";

// Forget password modal
export const setIsOpenForgetPasswordModal = (payload) => ({
  type: SET_IS_OPEN_FORGET_PASSWORD_MODAL,
  payload,
});

export const setForgetPasswordUsername = (payload) => ({
  type: SET_FORGET_PASSWORD_USERNAME,
  payload,
});

export const setNewPassword = (payload) => ({
  type: SET_NEW_PASSWORD,
  payload,
});

export const setModalTitle = (payload) => ({
  type: SET_MODAL_TITLE,
  payload,
});

export const setCurrentStepForgetPasswordModal = (payload) => ({
  type: SET_CURRENT_STEP_FORGET_PASSWORD_MODAL,
  payload,
});

export const setNumCode1 = (payload) => ({
  type: SET_NUM_CODE_1,
  payload,
});

export const setNumCode2 = (payload) => ({
  type: SET_NUM_CODE_2,
  payload,
});

export const setNumCode3 = (payload) => ({
  type: SET_NUM_CODE_3,
  payload,
});

export const setNumCode4 = (payload) => ({
  type: SET_NUM_CODE_4,
  payload,
});

export const setNumCode5 = (payload) => ({
  type: SET_NUM_CODE_5,
  payload,
});

export const setNumCode6 = (payload) => ({
  type: SET_NUM_CODE_6,
  payload,
});

export const setIsCorrectCode = (payload) => ({
  type: SET_IS_CORRECT_CODE,
  payload,
});

export const setCorrectCode = (payload) => ({
  type: SET_CORRECT_CODE,
  payload,
});

export const setCloseForgetPasswordModalTime = (payload) => ({
  type: SET_CLOSE_FORGET_PASSWORD_MODAL_TIME,
  payload,
});

export const countdownCloseForgetPasswordModalTime = (payload) => ({
  type: COUNTDOWN_CLOSE_FORGET_PASSWORD_MODAL_TIME,
  payload,
});

export const setCodeTimeout = (payload) => ({
  type: SET_CODE_TIMEOUT,
  payload,
});

export const countdownCodeTimeout = (payload) => ({
  type: COUNTDOWN_CODE_TIMEOUT,
  payload,
});