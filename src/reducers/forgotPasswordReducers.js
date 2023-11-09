import {
  COUNTDOWN_CLOSE_FORGET_PASSWORD_MODAL_TIME,
  COUNTDOWN_CODE_TIMEOUT,
  SET_CLOSE_FORGET_PASSWORD_MODAL_TIME,
  SET_CODE_TIMEOUT,
  SET_CORRECT_CODE,
  SET_CURRENT_STEP_FORGET_PASSWORD_MODAL,
  SET_IS_CORRECT_CODE,
  SET_IS_OPEN_FORGET_PASSWORD_MODAL,
  SET_MODAL_TITLE,
  SET_NEW_PASSWORD,
  SET_NUM_CODE_1,
  SET_NUM_CODE_2,
  SET_NUM_CODE_3,
  SET_NUM_CODE_4,
  SET_NUM_CODE_5,
  SET_NUM_CODE_6,
  SET_FORGET_PASSWORD_USERNAME,
} from "../constants";

const initialState = {
  isOpenForgetPasswordModal: false,
  forgetPasswordUsername: "",
  newPassword: "",
  modalTitle: "YÊU CẦU THAY ĐỔI MẬT KHẨU",
  currentStepForgetPasswordModal: 1,
  numCode1: "",
  numCode2: "",
  numCode3: "",
  numCode4: "",
  numCode5: "",
  numCode6: "",
  isCorrectCode: true,
  correctCode: "",
  closeForgetPasswordModalTime: 5,
  codeTimeout: 180,
};

const forgotPasswordReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_OPEN_FORGET_PASSWORD_MODAL:
      state.isOpenForgetPasswordModal = action.payload;
      break;
    case SET_FORGET_PASSWORD_USERNAME:
      state.forgetPasswordUsername = action.payload;
      break;
    case SET_NEW_PASSWORD:
      state.newPassword = action.payload;
      break;
    case SET_MODAL_TITLE:
      state.modalTitle = action.payload;
      break;
    case SET_CURRENT_STEP_FORGET_PASSWORD_MODAL:
      state.currentStepForgetPasswordModal = action.payload;
      break;
    case SET_NUM_CODE_1:
      state.numCode1 = action.payload;
      break;
    case SET_NUM_CODE_2:
      state.numCode2 = action.payload;
      break;
    case SET_NUM_CODE_3:
      state.numCode3 = action.payload;
      break;
    case SET_NUM_CODE_4:
      state.numCode4 = action.payload;
      break;
    case SET_NUM_CODE_5:
      state.numCode5 = action.payload;
      break;
    case SET_NUM_CODE_6:
      state.numCode6 = action.payload;
      break;
    case SET_IS_CORRECT_CODE:
      state.isCorrectCode = action.payload;
      break;
    case SET_CORRECT_CODE:
      state.correctCode = action.payload;
      break;
    case SET_CLOSE_FORGET_PASSWORD_MODAL_TIME:
      state.closeForgetPasswordModalTime = action.payload;
      break;
    case COUNTDOWN_CLOSE_FORGET_PASSWORD_MODAL_TIME:
      if (state.closeForgetPasswordModalTime > 0)
        state.closeForgetPasswordModalTime =
          state.closeForgetPasswordModalTime - action.payload;
      break;
    case SET_CODE_TIMEOUT:
      state.codeTimeout = action.payload;
      break;
    case COUNTDOWN_CODE_TIMEOUT:
      if (state.codeTimeout > 0)
        state.codeTimeout = state.codeTimeout - action.payload;
      break;
    default:
      break;
  }

  return { ...state };
};

export default forgotPasswordReducers;
