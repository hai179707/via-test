import Typography from "../components/Typography";

import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogin } from "../actions/loginActions";
import { setIsOpenForgetPasswordModal } from "../actions/forgetPasswordActions"
import Button from "./Button";
import FirstSectionWrapper from "./FirstSectionWrapper";
import ForgetPasswordModal from "./ForgetPasswordModal";
import LoginForm from "./LoginForm";
import SearchForm from "./SearchForm";

function LoginSection() {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((reduxData) => reduxData.loginReducer);

  const handleSignout = () => {
    dispatch(setIsLogin(false));
  };

  const handleOpenForgetPasswordModal = useCallback(() => {
    dispatch(setIsOpenForgetPasswordModal(true));
  }, [dispatch]);

  return (
    <FirstSectionWrapper>
      <div className="flex justify-end items-center">
        {isLogin ? (
          <div className="flex gap-12 z-10 items-center">
            <div>
              <Typography color="white" weight={600} size="lg">
                TÌM KIẾM NỘI DUNG
              </Typography>
              <div className="mt-4 p-7 rounded bg-white drop-shadow-xl">
                <SearchForm />
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center text-white">
              <Typography size="lg" weight={600}>
                Xin chào bạn
              </Typography>
              <Typography size="lg" weight={600} className="uppercase">
                Nguyễn Văn Học
              </Typography>
              <img
                src="https://meliawedding.com.vn/wp-content/uploads/2022/03/avatar-gai-xinh-9.jpg"
                alt="avatar"
                width="102px"
                height="107px"
              />
              <Button onClick={handleSignout}>Thoát</Button>
            </div>
          </div>
        ) : (
          <div className="mt-12 z-10">
            <Typography color="white" weight={600} size="lg">
              ĐĂNG NHẬP NGAY
            </Typography>
            <div className="mt-4 p-7 rounded bg-white drop-shadow-xl">
              <LoginForm />
            </div>
            <Typography
              className="mt-4 cursor-pointer"
              color="white"
              size="lg"
              align="right"
              onClick={handleOpenForgetPasswordModal}
            >
              Quên mật khẩu
            </Typography>
          </div>
        )}
      </div>
      <ForgetPasswordModal />
    </FirstSectionWrapper>
  );
}

export default LoginSection;
