import { FastField, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { setIsLogin } from "../actions/loginActions";
import { login } from "../services/userServices";
import Button from "./Button";
import InputField from "./InputField";

function LoginForm() {
  const dispatch = useDispatch();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Bạn chưa nhập số điện thoại hoặc email")
      .matches(
        /^([^\s@]+@[^\s@]+\.[^\s@]+$)|((84|0[3|5|7|8|9])+([0-9]{8})\b)/g,
        "Vui lòng kiểm tra lại email hoặc số điện thoại"
      ),
    password: Yup.string().required("Bạn chưa nhập mật khẩu"),
  });

  const handleLogin = (value) => {
    const { username, password } = value;

    const fetchApi = async () => {
      const res = await login({
        userName: username,
        password: password,
      });
      if (res.status === "success") {
        dispatch(setIsLogin(true));
      } else {
        dispatch(setIsLogin(false));
      }
    };
    fetchApi();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {() => {
        return (
          <Form className="flex items-end gap-4">
            <FastField
              name="username"
              component={InputField}
              label="Số điện thoại hoặc email"
              placeholder="Nhập số điện thoại hoặc email..."
              className="w-[266px]"
            />
            <FastField
              name="password"
              component={InputField}
              type="password"
              label="Mật khẩu"
              placeholder="Nhập mật khẩu..."
            />
            <Button type="submit">Đăng nhập</Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
