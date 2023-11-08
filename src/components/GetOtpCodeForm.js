import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentStepForgetPasswordModal,
  setModalTitle,
  setUsernameForgetPasswordModal,
  setUsernameForgetPasswordModalError,
} from "../actions/forgetPasswordActions";
import Button from "./Button";
import InputGroup from "./InputGroup";
import Typography from "./Typography";
import { getOtpChangePassword } from "../services/userServices";

function GetOtpCodeForm() {
  const dispatch = useDispatch();
  const {
    usernameForgetPasswordModal: { value, error, helperText },
  } = useSelector((reduxData) => reduxData.forgotPasswordReducers);

  const handleValidate = () => {
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

    let result = true;

    if (!value) {
      dispatch(
        setUsernameForgetPasswordModalError({
          error: true,
          helperText: "Bạn chưa nhập email hoặc số điện thoại",
        })
      );
      result = false;
    } else if (value.match(emailRegex) || value.match(phoneRegex)) {
      dispatch(
        setUsernameForgetPasswordModalError({
          error: false,
          helperText: "",
        })
      );
    } else {
      dispatch(
        setUsernameForgetPasswordModalError({
          error: true,
          helperText: "Vui lòng kiểm tra lại email hoặc số điện thoại",
        })
      );
      result = false;
    }
    return result;
  };

  const handleForgetPassword = (e) => {
    e.preventDefault();
    if (handleValidate()) {
      const fetchApi = async () => {
        const res = await getOtpChangePassword(value);
        if (res.status === "success") {
          dispatch(setModalTitle("NHẬP MÃ OTP"));
          dispatch(setCurrentStepForgetPasswordModal(2));
        }
      };
      fetchApi();
    }
  };

  return (
    <form
      className="w-[560px] flex flex-col items-center gap-6 p-6"
      onSubmit={handleForgetPassword}
    >
      <InputGroup
        value={value}
        onChange={(e) =>
          dispatch(setUsernameForgetPasswordModal(e.target.value))
        }
        label="Email/ Số điện thoại"
        placeholder="Nhập email hoặc số điện thoại..."
        className="w-[512px]"
        error={error}
        helperText={helperText}
      />
      <Typography align="center">
        Bạn vui lòng kiểm tra hòm thư đến hoặc mục tin nhắn trên điện thoại để
        lấy mã OTP
      </Typography>
      <Button type="submit" className="w-[130px]">
        Gửi yêu cầu
      </Button>
    </form>
  );
}

export default GetOtpCodeForm;
