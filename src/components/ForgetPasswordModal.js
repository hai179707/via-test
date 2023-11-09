import { useEffect } from "react";
import { RiShieldCheckLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  countdownCloseForgetPasswordModalTime,
  countdownCodeTimeout,
  setCloseForgetPasswordModalTime,
  setCurrentStepForgetPasswordModal,
  setIsOpenForgetPasswordModal,
  setModalTitle,
} from "../actions/forgetPasswordActions";
import { setIsLogin } from "../actions/loginActions";
import { login } from "../services/userServices";
import ChangePasswordForm from "./ChangePasswordForm";
import GetOtpCodeForm from "./GetOtpCodeForm";
import ModalHeader from "./ModalHeader";
import ModalWrapper from "./ModalWrapper";
import OtpForm from "./OtpForm";
import Typography from "./Typography";

function ForgetPasswordModal() {
  const dispatch = useDispatch();
  const {
    isOpenForgetPasswordModal,
    modalTitle,
    currentStepForgetPasswordModal,
    closeForgetPasswordModalTime,
    forgetPasswordUsername,
    newPassword,
  } = useSelector((reduxData) => reduxData.forgotPasswordReducers);

  useEffect(() => {
    let intervalAutoLogin, timeoutAutoLogin, intervalCodeTimeout;
    if (currentStepForgetPasswordModal === 4) {
      intervalAutoLogin = setInterval(() => {
        dispatch(countdownCloseForgetPasswordModalTime(1));
      }, 1000);

      timeoutAutoLogin = setTimeout(() => {
        const fetchApi = async () => {
          await login({
            userName: forgetPasswordUsername,
            password: newPassword,
          });
          dispatch(setCurrentStepForgetPasswordModal(1));
          dispatch(setModalTitle("YÊU CẦU THAY ĐỔI MẬT KHẨU"));
          dispatch(setCloseForgetPasswordModalTime(5));
          dispatch(setIsOpenForgetPasswordModal(false));
          dispatch(setIsLogin(true));
        };
        fetchApi();
      }, 5000);
    }
    if (currentStepForgetPasswordModal === 2) {
      intervalCodeTimeout = setInterval(() => {
        dispatch(countdownCodeTimeout(1));
      }, 1000);
    }

    return () => {
      clearInterval(intervalAutoLogin);
      clearTimeout(timeoutAutoLogin);
      clearTimeout(intervalCodeTimeout);
    };
  }, [currentStepForgetPasswordModal, dispatch]);

  return (
    <ModalWrapper
      isOpen={isOpenForgetPasswordModal}
      onClose={() => dispatch(setIsOpenForgetPasswordModal(false))}
    >
      {currentStepForgetPasswordModal !== 4 && (
        <ModalHeader
          onClose={() => dispatch(setIsOpenForgetPasswordModal(false))}
        >
          <Typography type="h6" size="lg" className="uppercase">
            {modalTitle}
          </Typography>
        </ModalHeader>
      )}
      <div className="relative">
        {/* Nhập số điện thoại  */}
        <div
          className={
            currentStepForgetPasswordModal === 1
              ? "transition-all duration-500 w-full relative top-0 z-[1] opacity-100 translate-x-0"
              : "transition-all duration-500 w-full absolute top-0 -z-[1] opacity-0 translate-x-[100px]"
          }
        >
          <GetOtpCodeForm />
        </div>
        {/* Nhập mã OTP  */}
        <div
          className={
            currentStepForgetPasswordModal === 2
              ? "transition-all duration-500 w-full relative top-0 z-[1] opacity-100 translate-x-0"
              : "transition-all duration-500 w-full absolute top-0 -z-[1] opacity-0 translate-x-[100px]"
          }
        >
          <OtpForm />
        </div>
        {/* Thiết lập mật khẩu mới  */}
        <div
          className={
            currentStepForgetPasswordModal === 3
              ? "transition-all duration-500 w-full relative top-0 z-[1] opacity-100 translate-x-0"
              : "transition-all duration-500 w-full absolute top-0 -z-[1] opacity-0 translate-x-[100px]"
          }
        >
          <ChangePasswordForm />
        </div>
        {/* Tự động đăng nhập  */}
        <div
          className={
            currentStepForgetPasswordModal === 4
              ? "transition-all duration-500 w-full relative top-0 z-[1] opacity-100 translate-x-0"
              : "transition-all duration-500 w-full absolute top-0 -z-[1] opacity-0 translate-x-[100px]"
          }
        >
          <div className="w-[560px] flex flex-col items-center gap-6 p-6">
            <RiShieldCheckLine size={64} className="text-green" />
            <Typography
              type="h4"
              align="center"
              color="green"
              size="xxl"
              weight={600}
              className="uppercase"
            >
              MẬT KHẨU ĐÃ ĐƯỢC THIẾT LẬP LẠI
            </Typography>
            <Typography align="center">
              Bạn vui lòng ghi nhớ mật khẩu nhé !
            </Typography>
            <Typography align="center" color="lorange">
              Tự động đăng nhập sau {closeForgetPasswordModalTime} giây
            </Typography>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default ForgetPasswordModal;
