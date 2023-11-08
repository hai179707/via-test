import { useSelector } from "react-redux";
import OurService from "./OurService";
import RegisterForm from "./RegisterForm";

function RegisterSection() {
  const { isLogin } = useSelector((reduxData) => reduxData.loginReducer);

  return (
    <div className="py-20">
      <div className={isLogin ? "container mx-auto flex justify-center items-center gap-[130px]" : "container mx-auto flex justify-center items-end gap-[130px]"}>
        <RegisterForm />
        <OurService />
      </div>
    </div>
  );
}

export default RegisterSection;
