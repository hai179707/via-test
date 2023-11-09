import { FastField, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { setCurrentStepForgetPasswordModal, setNewPassword } from "../actions/forgetPasswordActions";
import { changePassword } from "../services/userServices";
import Button from "./Button";
import InputField from "./InputField";

function ChangePasswordForm() {
  const dispatch = useDispatch();

  const { forgetPasswordUsername, correctCode } = useSelector(
    (reduxData) => reduxData.forgotPasswordReducers
  );

  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required("Bạn chưa mật khẩu mới")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{9,}$/,
        "Mật khẩu yêu cầu tối thiểu 9 ký tự, có ít nhất 1 chữ số, 1 chữ hoa, 1 chữ thường và 1 ký tự đặc biệt"
      ),
    confirmPassword: Yup.string()
      .required("Bạn chưa nhập xác nhận mật khẩu")
      .oneOf([Yup.ref("newPassword")], "Mật khẩu xác nhận không đúng"),
  });

  const handleChangePassword = ({ newPassword, confirmPassword }) => {
    const fetchApi = async () => {
      const res = await changePassword({
        userName: forgetPasswordUsername,
        otpCode: correctCode,
        password: newPassword,
        confirmPassword: confirmPassword,
      });
      if (res.status === "success") {
        dispatch(setNewPassword(newPassword));
        dispatch(setCurrentStepForgetPasswordModal(4));
      }
    };
    fetchApi();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleChangePassword}
    >
      {() => (
        <Form className="w-[560px] flex flex-col items-center gap-8 p-6">
          <FastField
            name="newPassword"
            component={InputField}
            type="password"
            label="Mật khẩu mới"
            placeholder="Nhập mật khẩu"
            className="w-[512px]"
          />
          <FastField
            name="confirmPassword"
            component={InputField}
            type="password"
            label="Xác nhận mật khẩu mới"
            placeholder="Nhập mật khẩu"
            className="w-[512px]"
          />
          <Button type="submit" className="w-[130px]">
            Đăng nhập
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default ChangePasswordForm;
