import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddress,
  setCity,
  setConfirmRegisterPassword,
  setConfirmRegisterPasswordError,
  setDistrict,
  setEmail,
  setEmailError,
  setIsAgreePolicy,
  setIsAgreePolicyError,
  setIsOpenRegisterModal,
  setPhoneNumber,
  setPhoneNumberError,
  setRegisterPassword,
  setRegisterPasswordError,
  setRegisterStatus,
  setStoreName,
  setStoreNameError,
  setWard,
} from "../actions";
import { getCities, getDistricts, getWards } from "../services/otherServices";
import Button from "./Button";
import InputGroup from "./InputGroup";
import RegisterModal from "./RegisterModal";
import SelectGroup from "./SelectGroup";
import Typography from "./Typography";
import { register } from "../services/userServices";

function RegisterForm() {
  const dispatch = useDispatch();
  const {
    storeName,
    phoneNumber,
    email,
    registerPassword,
    confirmRegisterPassword,
    address,
    ward,
    district,
    city,
    isAgreePolicy,
  } = useSelector((reduxData) => reduxData.registerReducer);
  const { isLogin } = useSelector((reduxData) => reduxData.loginReducer);

  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const handleValidate = () => {
    let result = true;

    if (storeName.value) {
      dispatch(
        setStoreNameError({
          error: false,
          helperText: "",
        })
      );
    } else {
      dispatch(
        setStoreNameError({
          error: true,
          helperText: "Bạn chưa nhập tên cửa hàng",
        })
      );
      result = false;
    }

    if (phoneNumber.value.match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g)) {
      dispatch(
        setPhoneNumberError({
          error: false,
          helperText: "",
        })
      );
    } else {
      dispatch(
        setPhoneNumberError({
          error: true,
          helperText: "Bạn đã nhập sai số điện thoại",
        })
      );
      result = false;
    }

    if (
      email.value.match(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      )
    ) {
      dispatch(
        setEmailError({
          error: false,
          helperText: "",
        })
      );
    } else {
      dispatch(
        setEmailError({
          error: true,
          helperText: "Bạn đã nhập sai số email",
        })
      );
      result = false;
    }
    if (
      registerPassword.value.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{9,}$/
      )
    ) {
      dispatch(
        setRegisterPasswordError({
          error: false,
          helperText: "",
        })
      );
    } else {
      dispatch(
        setRegisterPasswordError({
          error: true,
          helperText:
            "Mật khẩu yêu cầu tối thiểu 9 ký tự, có ít nhất 1 chữ số, 1 chữ hoa, 1 chữ thường và 1 ký tự đặc biệt",
        })
      );
      result = false;
    }

    if (confirmRegisterPassword.value === registerPassword.value) {
      dispatch(
        setConfirmRegisterPasswordError({
          error: false,
          helperText: "",
        })
      );
    } else {
      dispatch(
        setConfirmRegisterPasswordError({
          error: true,
          helperText: "Mật khẩu xác nhận không đúng",
        })
      );
      result = false;
    }

    if (isAgreePolicy.value) {
      dispatch(
        setIsAgreePolicyError({
          error: false,
        })
      );
    } else {
      dispatch(
        setIsAgreePolicyError({
          error: true,
        })
      );
      result = false;
    }

    return result;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (handleValidate()) {
      const fetchApi = async () => {
        const res = await register({
          userName: phoneNumber.value,
          shopName: storeName.value,
          phoneNumber: phoneNumber.value,
          password: registerPassword.value,
          confirmPassword: confirmRegisterPassword.value,
          email: email.value,
          address: address.value,
          wards: ward.name,
          district: district.name,
          province: city.name,
          acceptTerm: isAgreePolicy.value,
        });
        if (res.status === "success") {
          dispatch(setIsOpenRegisterModal(true));
          dispatch(setRegisterStatus(true));
        } 
        else {
          dispatch(setIsOpenRegisterModal(true));
          dispatch(setRegisterStatus(false));
        }
      };
      fetchApi();
    }
  };

  // Lấy danh sách tỉnh thành phố
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCities();
      if (data) setCities(data);
    };
    fetchApi();
  }, []);

  // Lấy danh sách quận huyện
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getDistricts(city.code);
      if (data) setDistricts(data.districts);
    };
    if (city.code) fetchApi();
  }, [city.code]);

  // Lấy danh sách phường xã
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getWards(district.code);
      if (data) setWards(data.wards);
    };
    if (district.code) fetchApi();
  }, [district.code]);

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
        <div>
          <form
            className="flex flex-col items-center gap-7"
            onSubmit={handleRegister}
          >
            <Typography type="h4" color="orange" size="xl">
              ĐĂNG KÝ TÀI KHOẢN
            </Typography>
            <div className="flex gap-6">
              <InputGroup
                value={storeName.value}
                onChange={(e) => dispatch(setStoreName(e.target.value))}
                label="Tên cửa hàng"
                placeholder="Nhập tên cửa hàng..."
                asterisk
                error={storeName.error}
                helperText={storeName.helperText}
              />
              <InputGroup
                value={phoneNumber.value}
                onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
                label="Số điện thoại"
                placeholder="Nhập số điện thoại..."
                asterisk
                error={phoneNumber.error}
                helperText={phoneNumber.helperText}
              />
              <InputGroup
                value={email.value}
                onChange={(e) => dispatch(setEmail(e.target.value))}
                label="Email"
                placeholder="Nhập email..."
                asterisk
                error={email.error}
                helperText={email.helperText}
              />
            </div>
            <div className="flex gap-6">
              <InputGroup
                value={registerPassword.value}
                onChange={(e) => dispatch(setRegisterPassword(e.target.value))}
                type="password"
                label="Mật khẩu"
                placeholder="Nhập mật khẩu..."
                asterisk
                className="w-[387px]"
                error={registerPassword.error}
                helperText={registerPassword.helperText}
              />
              <InputGroup
                value={confirmRegisterPassword.value}
                onChange={(e) =>
                  dispatch(setConfirmRegisterPassword(e.target.value))
                }
                type="password"
                label="Xác nhận mật khẩu"
                placeholder="Xác nhận mật khẩu..."
                asterisk
                className="w-[387px]"
                error={confirmRegisterPassword.error}
                helperText={confirmRegisterPassword.helperText}
              />
            </div>
            <div className="w-full">
              <InputGroup
                value={address.value}
                onChange={(e) => dispatch(setAddress(e.target.value))}
                label="Địa chỉ"
                placeholder="Nhập số nhà, tòa nhà, tên đường..."
                className="w-full"
              />
            </div>
            <div className="flex gap-6">
              <SelectGroup
                value={ward.code + "/" + ward.name}
                onChange={(e) => {
                  const value = e.target.value.split("/");
                  dispatch(
                    setWard({
                      code: value[0],
                      name: value[1],
                    })
                  );
                }}
                label="Phường/Xã"
              >
                <option>Chọn Phường/Xã</option>
                {!!wards.length &&
                  wards.map((ward) => (
                    <option value={ward.code + "/" + ward.name} key={ward.code}>
                      {ward.name}
                    </option>
                  ))}
              </SelectGroup>
              <SelectGroup
                value={district.code + "/" + district.name}
                onChange={(e) => {
                  const value = e.target.value.split("/");
                  dispatch(
                    setDistrict({
                      code: value[0],
                      name: value[1],
                    })
                  );
                }}
                label="Quận/Huyện"
              >
                <option>Chọn Quận/Huyện</option>
                {!!districts.length &&
                  districts.map((district) => (
                    <option
                      value={district.code + "/" + district.name}
                      key={district.code}
                    >
                      {district.name}
                    </option>
                  ))}
              </SelectGroup>
              <SelectGroup
                value={city.code + "/" + city.name}
                onChange={(e) => {
                  const value = e.target.value.split("/");
                  dispatch(
                    setCity({
                      code: value[0],
                      name: value[1],
                    })
                  );
                }}
                label="Thành phố"
              >
                <option>Chọn Thành phố</option>
                {!!cities.length &&
                  cities.map((city) => (
                    <option value={city.code + "/" + city.name} key={city.code}>
                      {city.name}
                    </option>
                  ))}
              </SelectGroup>
            </div>
            <div className="flex gap-[206px] items-center">
              <div className="relative">
                <label
                  htmlFor="agreePolicy"
                  className="pl-4 cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    id="agreePolicy"
                    value={isAgreePolicy.value}
                    onChange={(e) => {
                      dispatch(
                        setIsAgreePolicyError({
                          error: !e.target.checked,
                        })
                      );
                      dispatch(setIsAgreePolicy(e.target.checked));
                    }}
                    className="absolute opacity-0 h-0 w-0 cursor-pointer agree-policy"
                  />
                  <span
                    className={
                      isAgreePolicy.error
                        ? "checkmark absolute top-0 -left-4 w-6 h-6 border border-red rounded"
                        : "checkmark absolute top-0 -left-4 w-6 h-6 border border-orange rounded after:hidden after:absolute after:content-[''] after:top-50 after:left-50 after:w-2 after:h-3 after:border-2 after:border-orange after:border-t-0 after:border-l-0 after:-translate-x-50 after:-translate-y-50 after:rotate-45"
                    }
                  ></span>
                  Tôi đã đọc và đồng ý với{" "}
                  <a href="/" target="_blank" className="text-lorange">
                    Chính sách bảo mật thông tin
                  </a>
                </label>
              </div>
              <Button type="submit" disable={isAgreePolicy.error}>
                Đăng ký ngay
              </Button>
            </div>
          </form>
          <RegisterModal />
        </div>
      )}
    </>
  );
}

export default RegisterForm;
