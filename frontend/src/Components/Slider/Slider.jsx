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
          <img src="../../src/assets/raciones.jpg" alt="" />
          <p>RACIONES</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/platosCombinados.jpg" alt="" />
          <p>PLATOS COMBINADOS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/platosLatinos.jpg" alt="" />
          <p>PLATOS LATINOS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/hamburguesas.jpg" alt="" />
          <p>HAMBURGUESAS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/platosInfantiles.jpg" alt="" />
          <p>PLATOS INFANTILES</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/paraPicar.jpg" alt="" />
          <p>PARA PICAR</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/cazuelas.jpg" alt="" />
          <p>CAZUELAS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/ensaladas.jpg" alt="" />
          <p>ENSALADAS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/revueltos.jpg" alt="" />
          <p>REVUELTOS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/platosVeganos.jpg" alt="" />
          <p>PLATOS VEGANOS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/deCuchara.jpg" alt="" />
          <p>DE CUCHARA</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/pescados.jpg" alt="" />
          <p>PESCADOS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/platoEspecial.jpg" alt="" />
          <p>PLATO ESPECIAL</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/carnes.jpg" alt="" />
          <p>CARNES</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/postres.jpg" alt="" />
          <p>POSTRES</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/vinos.jpg" alt="" />
          <p>VINOS</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
