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

const initialState = {
  cities: [],
  districts: [],
  wards: [],
  cityCode: "",
  districtCode: "",
  wardCode: "",
  isOpenRegisterModal: false,
  registerStatus: false,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_OPEN_REGISTER_MODAL:
      state.isOpenRegisterModal = action.payload;
      break;
    case SET_REGISTER_STATUS:
      state.registerStatus = action.payload;
      break;
    case SET_CITY_CODE:
      state.cityCode = action.payload;
      break;
    case SET_DISTRICT_CODE:
      state.districtCode = action.payload;
      break;
    case SET_WARD_CODE:
      state.wardCode = action.payload;
      break;
    case SET_CITIES:
      state.cities = [...action.payload];
      break;
    case SET_DISTRICTS:
      state.districts = [...action.payload];
      break;
    case SET_WARDS:
      state.wards = [...action.payload];
      break;
    default:
      break;
  }

  return { ...state };
};

export default registerReducer;
