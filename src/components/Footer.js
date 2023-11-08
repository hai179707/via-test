import logo from "../assets/images/logo.png";
import SocialIcon from "./SocialIcon";
import Typography from "./Typography";

// icons
import { ReactComponent as FacebookIcon } from "../assets/images/facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/images/instagram.svg";
import { ReactComponent as TiktokIcon } from "../assets/images/tiktok.svg";
import { ReactComponent as YoutubeIcon } from "../assets/images/youtube.svg";
import { ReactComponent as ZaloIcon } from "../assets/images/zalo.svg";

import { FiMail, FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
// Hình ảnh
import bctIcon from "../assets/images/icon-bct.png";
import qr from "../assets/images/qr.jpg";
import appStore from "../assets/images/app-store.png";
import googlePlay from "../assets/images/google-play-badge.png";

function Footer() {
  return (
    <div className="bg-bgorange pt-12 text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-x-[100px] items-end">
          <div className="w-[482px]">
            <img src={logo} alt="Footer logo" />
            <div className="py-4 max-w-[320px]">
              <Typography className="uppercase" weight={600} size="sm">
                CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN ỨNG DỤNG THÔNG MINH VIỆT
              </Typography>
              <Typography size="xs">
                Mã Số Thuế: 0106494214
                <br />
                Ngày hoạt động: 27/03/2014
                <br />
                Sở Kế Hoạch và Đầu Tư Thành Phố Hà Nội
              </Typography>
            </div>
            <div className="flex gap-x-4">
              <SocialIcon icon={FacebookIcon} />
              <SocialIcon icon={InstagramIcon} />
              <SocialIcon icon={TiktokIcon} />
              <SocialIcon icon={YoutubeIcon} />
              <SocialIcon icon={ZaloIcon} />
            </div>
          </div>
          <div className="w-[685px] flex gap-x-[100px]">
            <div className="w-[375px]">
              <Typography className="uppercase" weight={600} size="sm">
                LIÊN HỆ
              </Typography>
              <div className="py-4">
                <div className="flex gap-x-2 items-center">
                  <FiMail />
                  <Typography size="sm">contact@viajsc.com</Typography>
                </div>
                <div className="flex gap-x-2 items-center mt-2">
                  <FiPhone />
                  <Typography size="sm">1900 9999</Typography>
                </div>
                <div className="flex gap-x-2 items-center mt-2">
                  <MdOutlineLocationOn />
                  <Typography size="sm">
                    16, Ngõ 204, Trần Duy Hưng, Trung Hòa, Cầu Giấy, HN
                  </Typography>
                </div>
              </div>
              <img src={bctIcon} alt="Icon bộ công thương" />
            </div>
            <div>
              <Typography className="uppercase" weight={600} size="sm">
                TẢI ỨNG DỤNG
              </Typography>
              <div className="pt-4 flex gap-x-5">
                <img src={qr} alt="Mã qr" className="w-20 h-20" />
                <div>
                  <img src={appStore} alt="App store" className="mb-2" />
                  <img src={googlePlay} alt="Google play" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12 text-center">
            <Typography className="uppercase mb-2" weight={600} size="sm">Chính sách bảo mật</Typography>
            <Typography size="sm">Copyright © 2021 VIA JSC. All rights reserved.</Typography>
        </div>
      </div>
    </div>
  );
}

export default Footer;
