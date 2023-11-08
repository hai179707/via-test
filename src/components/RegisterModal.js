import { RiArrowLeftSLine, RiShieldCheckLine } from "react-icons/ri";
import { SlShield } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenRegisterModal } from "../actions";
import { setIsLogin } from "../actions/loginActions";
import Button from "./Button";
import ModalWrapper from "./ModalWrapper";
import Typography from "./Typography";

function RegisterModal() {
  const dispatch = useDispatch();
  const { isOpenRegisterModal, registerStatus } = useSelector(
    (reduxData) => reduxData.registerReducer
  );

  const handleLogin = () => {
    dispatch(setIsOpenRegisterModal(false));
    dispatch(setIsLogin(true));
    window.scrollTo(0, 0);
  };

  return (
    <ModalWrapper
      isOpen={isOpenRegisterModal}
      onClose={() => dispatch(setIsOpenRegisterModal(false))}
    >
      {registerStatus ? (
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
            ĐĂNG KÝ THÀNH CÔNG
          </Typography>
          <Typography align="center">
            Để sử dụng dịch vụ thu hộ, <br />
            bạn có muốn Ký kết hợp đồng điện tử ngay ?
          </Typography>
          <div className="flex gap-6">
            <Button theme="gray" onClick={handleLogin}>
              Đăng nhập
            </Button>
            <Button theme="green" onClick={handleLogin}>
              Ký kết hợp đồng
            </Button>
          </div>
        </div>
      ) : (
        <div className="w-[560px] flex flex-col items-center gap-6 p-6">
          <SlShield size={64} className="text-red" />
          <Typography
            type="h4"
            align="center"
            color="red"
            size="xxl"
            weight={600}
            className="uppercase"
          >
            ĐĂNG KÝ KHÔNG THÀNH CÔNG
          </Typography>
          <Typography align="center">
            Thông tin bạn đăng ký có thể đã trùng <br />
            với một tài khoản khác trong hệ thống
          </Typography>
          <div className="flex gap-6">
            <Button
              theme="gray"
              onClick={() => dispatch(setIsOpenRegisterModal(false))}
              icon={RiArrowLeftSLine}
            >
              Bỏ qua đăng ký
            </Button>
            <Button
              theme="green"
              onClick={() => dispatch(setIsOpenRegisterModal(false))}
            >
              Thử lại
            </Button>
          </div>
        </div>
      )}
    </ModalWrapper>
  );
}

export default RegisterModal;
