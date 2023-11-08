import { useDispatch, useSelector } from "react-redux";
import {
  setConfirmPasswordForgetPasswordModal,
  setConfirmPasswordForgetPasswordModalError,
  setCurrentStepForgetPasswordModal,
  setNewPasswordForgetPasswordModal,
  setNewPasswordForgetPasswordModalError,
  setUsernameForgetPasswordModal,
} from "../actions/forgetPasswordActions";
import { changePassword } from "../services/userServices";
import Button from "./Button";
import InputGroup from "./InputGroup";

function ChangePasswordForm() {
  const dispatch = useDispatch();

  const {
    newPasswordForgetPasswordModal: newPassword,
    confirmPasswordForgetPasswordModal: confirmPassword,
    usernameForgetPasswordModal,
    correctCode
  } = useSelector((reduxData) => reduxData.forgotPasswordReducers);

  const handleValidation = () => {
    let result = true;

    if (
      newPassword.value.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{9,}$/
      )
    ) {
      dispatch(
        setNewPasswordForgetPasswordModalError({
          error: false,
          helperText: "",
        })
      );
    } else {
      dispatch(
        setNewPasswordForgetPasswordModalError({
          error: true,
          helperText:
            "Mật khẩu yêu cầu tối thiểu 9 ký tự, có ít nhất 1 chữ số, 1 chữ hoa, 1 chữ thường và 1 ký tự đặc biệt",
        })
      );
      result = false;
    }

    if (confirmPassword.value === newPassword.value) {
      dispatch(
        setConfirmPasswordForgetPasswordModalError({
          error: false,
          helperText: "",
        })
      );
    } else {
      dispatch(
        setConfirmPasswordForgetPasswordModalError({
          error: true,
          helperText: "Mật khẩu xác nhận không đúng",
        })
      );
      result = false;
    }

    return result;
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const fetchApi = async () => {
        const res = await changePassword({
          userName: usernameForgetPasswordModal.value,
          otpCode: correctCode,
          password: newPassword.value,
          confirmPassword: confirmPassword.value,
        });
        if (res.status === "success") {
          dispatch(setCurrentStepForgetPasswordModal(4));
        }
      };
      fetchApi();
    }
  };

  return (
    <form
      className="w-[560px] flex flex-col items-center gap-8 p-6"
      onSubmit={handleChangePassword}
    >
      <InputGroup
        value={newPassword.value}
        onChange={(e) =>
          dispatch(setNewPasswordForgetPasswordModal(e.target.value))
        }
        type="password"
        label="Mật khẩu mới"
        placeholder="Nhập mật khẩu"
        className="w-[512px]"
        error={newPassword.error}
        helperText={newPassword.helperText}
      />
      <InputGroup
        value={confirmPassword.value}
        onChange={(e) =>
          dispatch(setConfirmPasswordForgetPasswordModal(e.target.value))
        }
        type="password"
        label="Xác nhận mật khẩu mới"
        placeholder="Nhập mật khẩu"
        className="w-[512px]"
        error={confirmPassword.error}
        helperText={confirmPassword.helperText}
      />
      <Button type="submit" className="w-[130px]">
        Đăng nhập
      </Button>
    </form>
  );
}

export default ChangePasswordForm;
