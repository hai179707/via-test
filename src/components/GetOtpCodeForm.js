import { FastField, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import {
  setCurrentStepForgetPasswordModal,
  setForgetPasswordUsername,
  setModalTitle,
} from "../actions/forgetPasswordActions";
import { getOtpChangePassword } from "../services/userServices";
import Button from "./Button";
import InputField from "./InputField";
import Typography from "./Typography";

function GetOtpCodeForm() {
  const dispatch = useDispatch();

  const initialValues = {
    forgetPaswordUsername: "",
  };

  const validationSchema = Yup.object().shape({
    forgetPaswordUsername: Yup.string()
      .required("Bạn chưa nhập số điện thoại hoặc email")
      .matches(
        /^([^\s@]+@[^\s@]+\.[^\s@]+$)|((84|0[3|5|7|8|9])+([0-9]{8})\b)/g,
        "Vui lòng kiểm tra lại email hoặc số điện thoại"
      ),
  });

  const handleGetOtpCode = ({ forgetPaswordUsername }) => {
    const fetchApi = async () => {
      const res = await getOtpChangePassword(forgetPaswordUsername);
      if (res.status === "success") {
        dispatch(setModalTitle("NHẬP MÃ OTP"));
        dispatch(setCurrentStepForgetPasswordModal(2));
        dispatch(setForgetPasswordUsername(forgetPaswordUsername));
      }
    };
    fetchApi();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleGetOtpCode}
    >
      {() => (
        <Form className="w-[560px] flex flex-col items-center gap-6 p-6">
          <FastField
            name="forgetPaswordUsername"
            component={InputField}

            label="Email/ Số điện thoại"
            placeholder="Nhập số điện thoại hoặc email..."
            className="w-[512px]"
          />
          <Typography align="center">
            Bạn vui lòng kiểm tra hòm thư đến hoặc mục tin nhắn trên điện thoại
            để lấy mã OTP
          </Typography>
          <Button type="submit" className="w-[130px]">
            Gửi yêu cầu
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default GetOtpCodeForm;
