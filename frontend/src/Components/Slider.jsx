import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";
import { Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <div>
      <Swiper
        slidesPerView={5}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="../../src/assets/platosCombinados.jpg" alt="" />
          <p>TEXTO</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/platosCombinados.jpg" alt="" />
          <p>TEXTO</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/platosCombinados.jpg" alt="" />
          <p>TEXTO</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/platosCombinados.jpg" alt="" />
          <p>TEXTO</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/platosCombinados.jpg" alt="" />
          <p>TEXTO</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/platosCombinados.jpg" alt="" />
          <p>TEXTO</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/platosCombinados.jpg" alt="" />
          <p>TEXTO</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/platosCombinados.jpg" alt="" />
          <p>TEXTO</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/platosCombinados.jpg" alt="" />
          <p>TEXTO</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
