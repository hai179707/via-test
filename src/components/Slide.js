import { useRef } from "react";
import Typography from "./Typography";

// Icon
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

// Swiper slide
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

// Hình ảnh khách hàng
import khachhang1 from "../assets/images/1.png";
import khachhang2 from "../assets/images/2.png";
import khachhang3 from "../assets/images/3.png";
import khachhang4 from "../assets/images/4.png";
import khachhang5 from "../assets/images/5.png";
import khachhang6 from "../assets/images/6.png";

function Slide() {
  const swiperRef = useRef();

  return (
    <div className="bg-bggray py-12">
      <div className="container mx-auto">
        {/* Tiêu đề */}
        <Typography
          type="h4"
          color="orange"
          align="center"
          size="xxl"
          className="mb-6"
        >
          KHÁCH HÀNG TIÊU BIỂU
        </Typography>
        {/* Slide danh sách khách hàng tiêu biểu */}
        <div className="px-[86px] relative select-none">
          <Swiper
            slidesPerView={6}
            spaceBetween={54}
            loop={true}
            onBeforeInit={(swiper) => (swiperRef.current = swiper)}
          >
            <SwiperSlide>
              <div className="h-[78px] flex justify-center items-center">
                <img src={khachhang1} alt="Khách hàng" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[78px] flex justify-center items-center">
                <img src={khachhang2} alt="Khách hàng" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[78px] flex justify-center items-center">
                <img src={khachhang3} alt="Khách hàng" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[78px] flex justify-center items-center">
                <img src={khachhang4} alt="Khách hàng" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[78px] flex justify-center items-center">
                <img src={khachhang5} alt="Khách hàng" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[78px] flex justify-center items-center">
                <img src={khachhang6} alt="Khách hàng" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[78px] flex justify-center items-center">
                <img src={khachhang3} alt="Khách hàng" />
              </div>
            </SwiperSlide>
          </Swiper>
          {/* Slide navigation */}
          <div
            className="absolute top-50 -translate-y-50 left-0 cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <RiArrowLeftSLine size={32} />
          </div>
          <div
            className="absolute top-50 -translate-y-50 right-0 cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <RiArrowRightSLine size={32} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
