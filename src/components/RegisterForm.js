import { FastField, Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  setCities,
  setDistricts,
  setIsOpenRegisterModal,
  setRegisterStatus,
  setWards,
} from "../actions";
import { getCities, getDistricts, getWards } from "../services/otherServices";
import { register } from "../services/userServices";
import Button from "./Button";
import CheckboxField from "./CheckboxField";
import InputField from "./InputField";
import RegisterModal from "./RegisterModal";
import SelectLocationField from "./SelectLocationField";
import Typography from "./Typography";

function RegisterForm() {
  const dispatch = useDispatch();
  const { districtCode, cityCode, wards, districts, cities } = useSelector(
    (reduxData) => reduxData.registerReducer
  );
  const { isLogin } = useSelector((reduxData) => reduxData.loginReducer);

  const validationSchema = Yup.object().shape({
    shopName: Yup.string().required("Bạn chưa nhập tên cửa hàng"),
    phoneNumber: Yup.string()
      .required("Bạn chưa nhập số điện thoại")
      .matches(
        /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
        "Bạn đã nhập sai số điện thoại"
      ),
    email: Yup.string()
      .required("Bạn chưa nhập email")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/g, "Vui lòng kiểm tra lại email"),
    registerPassword: Yup.string()
      .required("Bạn chưa mật khẩu mới")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{9,}$/,
        "Mật khẩu yêu cầu tối thiểu 9 ký tự, có ít nhất 1 chữ số, 1 chữ hoa, 1 chữ thường và 1 ký tự đặc biệt"
      ),
    confirmRegisterPassword: Yup.string()
      .required("Bạn chưa nhập xác nhận mật khẩu")
      .oneOf([Yup.ref("registerPassword")], "Mật khẩu xác nhận không đúng"),
    isAgreePolicy: Yup.boolean().oneOf([true]),
  });

  const handleRegister = (value) => {
    const {
      shopName,
      phoneNumber,
      email,
      registerPassword,
      confirmRegisterPassword,
      address,
      ward,
      district,
      city,
      isAgreePolicy,
    } = value;

    const fetchApi = async () => {
      const res = await register({
        userName: phoneNumber,
        shopName: shopName,
        phoneNumber: phoneNumber,
        password: registerPassword,
        confirmPassword: confirmRegisterPassword,
        email: email,
        address: address,
        wards: ward.split("/")[1],
        district: district.split("/")[1],
        province: city.split("/")[1],
        acceptTerm: isAgreePolicy,
      });
      if (res.status === "success") {
        dispatch(setIsOpenRegisterModal(true));
        dispatch(setRegisterStatus(true));
      } else {
        dispatch(setIsOpenRegisterModal(true));
        dispatch(setRegisterStatus(false));
      }
    };
    fetchApi();
  };

  // Lấy danh sách tỉnh thành phố
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCities();
      if (data) dispatch(setCities(data));
    };
    fetchApi();
  }, []);

  // Lấy danh sách quận huyện
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getDistricts(cityCode);
      if (data) dispatch(setDistricts(data.districts));
    };
    if (cityCode) fetchApi();
  }, [cityCode]);

  // Lấy danh sách phường xã
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getWards(districtCode);
      if (data) dispatch(setWards(data.wards));
    };
    if (districtCode) fetchApi();
  }, [districtCode]);

  return (
    <>
      {isLogin ? (
        <div className="min-w-[798px] h-full flex flex-col justify-center items-center gap-[52px]">
          <Typography type="h4" color="lorange" size="xl">
            BẠN ĐÃ ĐĂNG NHẬP THÀNH CÔNG
          </Typography>
          <Typography>
            Chào mừng <span className="text-lorange">User1</span> đã quay trở
            lại hệ thống
          </Typography>
        </div>
      ) : (
        <Formik
          initialValues={{
            shopName: "",
            phoneNumber: "",
            email: "",
            registerPassword: "",
            confirmRegisterPassword: "",
            address: "",
            ward: "",
            district: "",
            city: "",
            isAgreePolicy: false,
          }}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          {({ errors, touched }) => {
            return (
              <>
                <Form className="flex flex-col items-center gap-7">
                  <Typography type="h4" color="orange" size="xl">
                    ĐĂNG KÝ TÀI KHOẢN
                  </Typography>
                  <div className="flex gap-6">
                    <FastField
                      name="shopName"
                      component={InputField}
                      label="Tên cửa hàng"
                      placeholder="Nhập tên cửa hàng..."
                      asterisk
                    />
                    <FastField
                      name="phoneNumber"
                      component={InputField}
                      label="Số điện thoại"
                      placeholder="Nhập số điện thoại..."
                      asterisk
                    />
                    <FastField
                      name="email"
                      component={InputField}
                      label="Email"
                      placeholder="Nhập email..."
                      asterisk
                    />
                  </div>
                  <div className="flex gap-6">
                    <FastField
                      name="registerPassword"
                      component={InputField}
                      type="password"
                      label="Mật khẩu"
                      placeholder="Nhập mật khẩu..."
                      asterisk
                      className="w-[387px]"
                    />
                    <FastField
                      name="confirmRegisterPassword"
                      component={InputField}
                      type="password"
                      label="Xác nhận mật khẩu"
                      placeholder="Xác nhận mật khẩu..."
                      asterisk
                      className="w-[387px]"
                    />
                  </div>
                  <div className="w-full">
                    <FastField
                      name="address"
                      component={InputField}
                      label="Địa chỉ"
                      placeholder="Nhập số nhà, tòa nhà, tên đường..."
                      className="w-full"
                    />
                  </div>
                  <div className="flex gap-6">
                    <Field
                      name="ward"
                      component={SelectLocationField}
                      label="Phường/Xã"
                      defaultValue="Chọn Phường/Xã"
                      options={wards}
                    />
                    <Field
                      name="district"
                      component={SelectLocationField}
                      label="Quận/Huyện"
                      defaultValue="Chọn Quận/Huyện"
                      options={districts}
                    />
                    <Field
                      name="city"
                      component={SelectLocationField}
                      label="Thành phố"
                      defaultValue="Chọn Thành phố"
                      options={cities}
                    />
                  </div>
                  <div className="flex gap-[206px] items-center">
                    <div className="relative">
                      <FastField
                        name="isAgreePolicy"
                        component={CheckboxField}
                        label={
                          <>
                            Tôi đã đọc và đồng ý với{" "}
                            <a
                              href="/"
                              target="_blank"
                              className="text-lorange"
                            >
                              Chính sách bảo mật thông tin
                            </a>
                          </>
                        }
                      />
                    </div>
                    <Button
                      type="submit"
                      disable={errors.isAgreePolicy && touched.isAgreePolicy}
                    >
                      Đăng ký ngay
                    </Button>
                  </div>
                </Form>
                <RegisterModal />
              </>
            );
          }}
        </Formik>
      )}
    </>
  );
}

export default RegisterForm;
