import { useDispatch, useSelector } from "react-redux";
import {
  setIsLogin,
  setLoginPassword,
  setLoginPasswordError,
  setLoginUsername,
  setLoginUsernameError,
} from "../actions/loginActions";
import { login } from "../services/userServices";
import Button from "./Button";
import InputGroup from "./InputGroup";

function LoginForm() {
  const dispatch = useDispatch();
  const { loginUsername, loginPassword } = useSelector(
    (reduxData) => reduxData.loginReducer
  );

  const handleValidate = () => {
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

    let result = true;

    if (!loginUsername.value) {
      dispatch(
        setLoginUsernameError({
          error: true,
          helperText: "Bạn chưa nhập email hoặc số điện thoại",
        })
      );
      result = false;
    } else if (
      loginUsername.value.match(emailRegex) ||
      loginUsername.value.match(phoneRegex)
    ) {
      dispatch(
        setLoginUsernameError({
          error: false,
          helperText: "",
        })
      );
    } else {
      dispatch(
        setLoginUsernameError({
          error: true,
          helperText: "Vui lòng kiểm tra lại email hoặc số điện thoại",
        })
      );
      result = false;
    }

    if (!loginPassword.value) {
      dispatch(
        setLoginPasswordError({
          error: true,
          helperText: "Bạn chưa nhập mật khẩu!",
        })
      );
      result = false;
    } else {
      dispatch(
        setLoginPasswordError({
          error: false,
          helperText: "",
        })
      );
    }
    return result;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (handleValidate()) {
      const fetchApi = async () => {
        const res = await login({
          userName: loginUsername.value,
          password: loginPassword.value,
        });
        if (res.status === "success") {
          dispatch(setIsLogin(true));
          dispatch(setLoginUsername(""));
          dispatch(setLoginPassword(""));
        } else {
          dispatch(setIsLogin(false));
        }
      };
      fetchApi();
    }
  };

  return (
    <form className="flex items-end gap-4" onSubmit={handleLogin}>
      <InputGroup
        name="loginUsername"
        value={loginUsername.value}
        onChange={(e) => dispatch(setLoginUsername(e.target.value))}
        asterisk={false}
        label="Số điện thoại hoặc email"
        placeholder="Nhập số điện thoại hoặc email..."
        className="w-[266px]"
        error={loginUsername.error}
        helperText={loginUsername.helperText}
      />
      <InputGroup
        name="loginPassword"
        value={loginPassword.value}
        onChange={(e) => dispatch(setLoginPassword(e.target.value))}
        asterisk={false}
        type="password"
        label="Mật khẩu"
        placeholder="Nhập mật khẩu..."
        error={loginPassword.error}
        helperText={loginPassword.helperText}
      />
      <Button type="submit">Đăng nhập</Button>
    </form>
  );
}

export default LoginForm;
