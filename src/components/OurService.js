import Typography from "./Typography";

import { ReactComponent as Service1 } from "../assets/images/dichvu1.svg";
import { ReactComponent as Service2 } from "../assets/images/dichvu2.svg";
import { ReactComponent as Service3 } from "../assets/images/dichvu3.svg";
import { ReactComponent as Service4 } from "../assets/images/dichvu4.svg";
import { ReactComponent as Service5 } from "../assets/images/dichvu5.svg";

function OurService() {
  return (
    <div className="bg-bggray p-6 rounded flex gap-6 flex-wrap justify-between">
      <Typography type="h6" size="lg" align='center' className="w-full">
        DỊCH VỤ CỦA CHÚNG TÔI
      </Typography>
      <div className="w-[140px] px-4 py-4 bg-white flex flex-col justify-center items-center gap-2">
        <Service1 />
        <Typography weight={600}>VIA EXPRESS</Typography>
      </div>
      <div className="w-[140px] px-4 py-4 bg-white flex flex-col justify-center items-center gap-2">
        <Service2 />
        <Typography weight={600}>VIA FAST</Typography>
      </div>
      <div className="w-[140px] px-4 py-4 bg-white flex flex-col justify-center items-center gap-2">
        <Service3 />
        <Typography weight={600}>VIA SUPER</Typography>
      </div>
      <div className="w-[140px] px-4 py-4 bg-white flex flex-col justify-center items-center gap-2">
        <Service4 />
        <Typography weight={600}>VIA FRESH</Typography>
      </div>
      <div className="w-[304px] px-4 py-4 bg-white flex flex-col justify-center items-center gap-2">
        <Service5 />
        <Typography weight={600}>VIA INTERNATIONAL</Typography>
      </div>
    </div>
  );
}

export default OurService;
