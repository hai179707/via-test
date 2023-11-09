import {
  SET_CITIES,
  SET_CITY_CODE,
  SET_DISTRICTS,
  SET_DISTRICT_CODE,
  SET_IS_OPEN_REGISTER_MODAL,
  SET_REGISTER_STATUS,
  SET_WARDS,
  SET_WARD_CODE,
} from "../constants";

export const setIsOpenRegisterModal = (payload) => ({
  type: SET_IS_OPEN_REGISTER_MODAL,
  payload,
});

export const setRegisterStatus = (payload) => ({
  type: SET_REGISTER_STATUS,
  payload,
});

export const setCities = (payload) => ({
  type: SET_CITIES,
  payload,
});

export const setDistricts = (payload) => ({
  type: SET_DISTRICTS,
  payload,
});

export const setWards = (payload) => ({
  type: SET_WARDS,
  payload,
});

export const setLocation = (payload = {}) => {
  const { divisionType, code } = payload;

  if (divisionType === 'city') {
    return {
      type: SET_CITY_CODE,
      payload: code
    }
  }
  else if (divisionType === 'district') {
    return {
      type: SET_DISTRICT_CODE,
      payload: code
    }
  }
  else if (divisionType === 'ward') {
    return {
      type: SET_WARD_CODE,
      payload: code
    }
  }
};
