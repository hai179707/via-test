import {
  RiArrowLeftSLine,
  RiCheckFill,
  RiErrorWarningLine,
} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  setCodeTimeout,
  setCorrectCode,
  setCurrentStepForgetPasswordModal,
  setIsCorrectCode,
  setModalTitle,
  setNumCode1,
  setNumCode2,
  setNumCode3,
  setNumCode4,
  setNumCode5,
  setNumCode6,
} from "../actions/forgetPasswordActions";
import { getOtpChangePassword, validateOtpChangePassword } from "../services/userServices";
import Button from "./Button";
import Typography from "./Typography";

function OtpForm() {
  const dispatch = useDispatch();
  const {
    numCode1,
    numCode2,
    numCode3,
    numCode4,
    numCode5,
    numCode6,
    isCorrectCode,
    codeTimeout,
    usernameForgetPasswordModal,
  } = useSelector((reduxData) => reduxData.forgotPasswordReducers);

  const isEnabled =
    numCode1 &&
    numCode2 &&
    numCode3 &&
    numCode4 &&
    numCode5 &&
    numCode6 &&
    codeTimeout;

  const handleResendCode = () => {
    dispatch(setCodeTimeout(180));
    const fetchApi = async () => {
      await getOtpChangePassword(usernameForgetPasswordModal);
    };
    fetchApi();
  };

  const handleConfirmCode = (e) => {
    e.preventDefault();
    const otpCode = numCode1 + "" + numCode2 + "" + numCode3 + "" + numCode4 + "" + numCode5 + "" + numCode6

    if (isEnabled) {
      const fetchApi = async () => {
        const res = await validateOtpChangePassword({
          userName: usernameForgetPasswordModal.value,
          otpCode
        });
        if (res.status === "success") {
          dispatch(setIsCorrectCode(true));
          dispatch(setCorrectCode(otpCode));
          dispatch(setModalTitle("THIẾT LẬP MẬT KHẨU MỚI"));
          dispatch(setCurrentStepForgetPasswordModal(3));
          dispatch(setNumCode1(""));
          dispatch(setNumCode2(""));
          dispatch(setNumCode3(""));
          dispatch(setNumCode4(""));
          dispatch(setNumCode5(""));
          dispatch(setNumCode6(""));
          dispatch(setCodeTimeout(180));
        } else {
          dispatch(setIsCorrectCode(false));
          dispatch(setNumCode1(""));
          dispatch(setNumCode2(""));
          dispatch(setNumCode3(""));
          dispatch(setNumCode4(""));
          dispatch(setNumCode5(""));
          dispatch(setNumCode6(""));
        }
      };
      fetchApi();
    }
  };

  const secondsToMinutes = (seconds) => {
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return m + ":" + s;
  };

  return (
    <form
      className="w-[560px] flex flex-col items-center gap-8 p-6"
      onSubmit={handleConfirmCode}
    >
      {isCorrectCode ? (
        <Typography
          align="center"
          color="green"
          weight={600}
          className="uppercase"
        >
          MÃ OTP ĐÃ ĐƯỢC GỬI TỚI SỐ ĐIỆN THOẠI/ EMAIL
        </Typography>
      ) : (
        <div className="bg-bglorange rounded p-[10px] flex items-center gap-2 text-lorange">
          <RiErrorWarningLine size={24} />
          <Typography>
            Mã khôi phục không đúng.{" "}
            <span
              className="text-blue cursor-pointer"
              onClick={handleResendCode}
            >
              Gửi lại mã
            </span>
          </Typography>
        </div>
      )}
      <Typography align="center" color="lorange">
        Thời gian còn lại: <span>{secondsToMinutes(codeTimeout)}</span> phút
      </Typography>

      <div
        className={
          isCorrectCode ? "flex gap-4 text-green" : "flex gap-4 text-lorange"
        }
      >
        <input
          type="number"
          id="numCode1"
          className="rounded border border-gray outline-none p-4 w-[66px] h-[66px] text-center text-xxl font-extrabold"
          value={numCode1}
          onChange={(e) => {
            if (e.target.value.length < 2)
              dispatch(setNumCode1(e.target.value));
            if (e.target.value.length === 1)
              document.getElementById("numCode2").focus();
          }}
        />
        <input
          type="number"
          id="numCode2"
          className="rounded border border-gray outline-none p-4 w-[66px] h-[66px] text-center text-xxl font-extrabold"
          value={numCode2}
          onChange={(e) => {
            if (e.target.value.length < 2)
              dispatch(setNumCode2(e.target.value));
            if (e.target.value.length === 1)
              document.getElementById("numCode3").focus();
            if (e.target.value.length === 0)
              document.getElementById("numCode1").focus();
          }}
        />
        <input
          type="number"
          id="numCode3"
          className="rounded border border-gray outline-none p-4 w-[66px] h-[66px] text-center text-xxl font-extrabold"
          value={numCode3}
          onChange={(e) => {
            if (e.target.value.length < 2)
              dispatch(setNumCode3(e.target.value));
            if (e.target.value.length === 1)
              document.getElementById("numCode4").focus();
            if (e.target.value.length === 0)
              document.getElementById("numCode2").focus();
          }}
        />
        <input
          type="number"
          id="numCode4"
          className="rounded border border-gray outline-none p-4 w-[66px] h-[66px] text-center text-xxl font-extrabold"
          value={numCode4}
          onChange={(e) => {
            if (e.target.value.length < 2)
              dispatch(setNumCode4(e.target.value));
            if (e.target.value.length === 1)
              document.getElementById("numCode5").focus();
            if (e.target.value.length === 0)
              document.getElementById("numCode3").focus();
          }}
        />
        <input
          type="number"
          id="numCode5"
          className="rounded border border-gray outline-none p-4 w-[66px] h-[66px] text-center text-xxl font-extrabold"
          value={numCode5}
          onChange={(e) => {
            if (e.target.value.length < 2)
              dispatch(setNumCode5(e.target.value));
            if (e.target.value.length === 1)
              document.getElementById("numCode6").focus();
            if (e.target.value.length === 0)
              document.getElementById("numCode4").focus();
          }}
        />
        <input
          type="number"
          id="numCode6"
          className="rounded border border-gray outline-none p-4 w-[66px] h-[66px] text-center text-xxl font-extrabold"
          value={numCode6}
          onChange={(e) => {
            if (e.target.value.length < 2)
              dispatch(setNumCode6(e.target.value));
            if (e.target.value.length === 0)
              document.getElementById("numCode5").focus();
          }}
        />
      </div>
      {isCorrectCode && (
        <Typography align="center">
          Không nhận được mã OTP.{" "}
          <span className="text-blue cursor-pointer" onClick={handleResendCode}>
            Gửi lại mã
          </span>
        </Typography>
      )}
      <div className="flex gap-6">
        <Button
          theme="gray"
          className="w-[108px]"
          icon={RiArrowLeftSLine}
          onClick={() => {
            dispatch(setCurrentStepForgetPasswordModal(1));
            dispatch(setCodeTimeout(180));
          }}
        >
          Trở về
        </Button>
        <Button
          type="submit"
          className="w-[202px]"
          icon={RiCheckFill}
          disable={!isEnabled}
        >
          Thay đổi mật khẩu
        </Button>
      </div>
    </form>
  );
}

export default OtpForm;
