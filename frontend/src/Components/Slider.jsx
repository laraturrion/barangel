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
          <p>PARA PICAR</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/platosCombinados.jpg" alt="" />
          <p>CAZUELAS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/platosCombinados.jpg" alt="" />
          <p>ENSALADAS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/platosCombinados.jpg" alt="" />
          <p>PLATOS VEGANOS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/platosCombinados.jpg" alt="" />
          <p>PLATOS INFANTILES</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/platosCombinados.jpg" alt="" />
          <p>DE CUCHARA</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/platosCombinados.jpg" alt="" />
          <p>PESCADO</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/platosCombinados.jpg" alt="" />
          <p>PLATO ESPECIAL</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/platosCombinados.jpg" alt="" />
          <p>CARNES</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
