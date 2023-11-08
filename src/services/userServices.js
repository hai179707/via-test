import * as httpRequest from "../utils/httpRequest";

export const register = async (data) => {
  try {
    const res = await httpRequest.post("/ExamUser/register-user", data);
    if (res.errorCode === 200) {
      return {
        status: "success",
        data: res,
      };
    } else {
      return {
        status: "error",
      };
    }
  } catch (error) {
    return {
      status: "error",
      data: error,
    };
  }
};

export const login = async (data) => {
  try {
    const res = await httpRequest.post("/ExamUser/login", data);
    if (res.errorCode === 200) {
      return {
        status: "success",
        data: res,
      };
    } else {
      return {
        status: "error",
      };
    }
  } catch (error) {
    return {
      status: "error",
      data: error,
    };
  }
};

export const getOtpChangePassword = async (data) => {
  try {
    const res = await httpRequest.get(
      "/ExamUser/get-otp-change-password?userName=" + data
    );
    if (res.errorCode === 200) {
      return {
        status: "success",
        data: res,
      };
    } else {
      return {
        status: "error",
      };
    }
  } catch (error) {
    return {
      status: "error",
      data: error,
    };
  }
};

export const validateOtpChangePassword = async (data) => {
  try {
    const res = await httpRequest.get(
      "ExamUser/validate-otp-change-password?userName=" +
        data.userName +
        "&otpCode=" +
        data.otpCode
    );
    if (res.errorCode === 200) {
      return {
        status: "success",
        data: res,
      };
    } else {
      return {
        status: "error",
      };
    }
  } catch (error) {
    return {
      status: "error",
      data: error,
    };
  }
};

export const changePassword = async (data) => {
  try {
    const res = await httpRequest.post("ExamUser/change-password", data);
    if (res.errorCode === 200) {
      return {
        status: "success",
        data: res,
      };
    } else {
      return {
        status: "error",
      };
    }
  } catch (error) {
    return {
      status: "error",
      data: error,
    };
  }
};
