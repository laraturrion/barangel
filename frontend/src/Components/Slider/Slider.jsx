import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import PlatosLatinosModal from "../Modales/PlatosLatinosModal";
import EnsaladasModal from "../Modales/EnsaladasModal";
import PlatosInfantilesModal from "../Modales/PlatosInfantilesModal";
import ParaPicarModal from "../Modales/ParaPicarModal";
import CazuelasModal from "../Modales/CazuelasModal";
import PlatosVeganosModal from "../Modales/PlatosVeganosModal";

export default function Slider() {
  const [openPlatosLatinos, setOpenPlatosLatinos] = useState(false);
  const handleOpenPlatosLatinos = () => setOpenPlatosLatinos(true);
  const handleClosePlatosLatinos = () => setOpenPlatosLatinos(false);

  const [openInfantiles, setOpenInfantiles] = useState(false);
  const handleOpenInfantiles = () => setOpenInfantiles(true);
  const handleCloseInfantiles = () => setOpenInfantiles(false);

  const [openParaPicar, setOpenParaPicar] = useState(false);
  const handleOpenParaPicar = () => setOpenParaPicar(true);
  const handleCloseParaPicar = () => setOpenParaPicar(false);

  const [openCazuelas, setOpenCazuelas] = useState(false);
  const handleOpenCazuelas = () => setOpenCazuelas(true);
  const handleCloseCazuelas = () => setOpenCazuelas(false);

  const [openEnsaladas, setOpenEnsaladas] = useState(false);
  const handleOpenEnsaladas = () => setOpenEnsaladas(true);
  const handleCloseEnsaladas = () => setOpenEnsaladas(false);

  const [openPlatosVeganos, setOpenPlatosVeganos] = useState(false);
  const handleOpenPlatosVeganos = () => setOpenPlatosVeganos(true);
  const handleClosePlatosVeganos = () => setOpenPlatosVeganos(false);

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
          <p>PLATOS COMBINADOS</p>
        </SwiperSlide>
        <SwiperSlide onClick={handleOpenPlatosLatinos}>
          <img src="../../src/assets/platosLatinos.jpg" alt="" />
          <p>PLATOS LATINOS</p>
        </SwiperSlide>
        <PlatosLatinosModal
          open={openPlatosLatinos}
          handleClose={handleClosePlatosLatinos}
        />
        <SwiperSlide>
          <img src="../../src/assets/hamburguesas.jpg" alt="" />
          <p>HAMBURGUESAS</p>
        </SwiperSlide>
        <SwiperSlide onClick={handleOpenInfantiles}>
          <img src="../../src/assets/platosInfantiles.jpg" alt="" />
          <p>PLATOS INFANTILES</p>
        </SwiperSlide>
        <PlatosInfantilesModal
          open={openInfantiles}
          handleClose={handleCloseInfantiles}
        />
        <SwiperSlide onClick={handleOpenParaPicar}>
          <img src="../../src/assets/raciones.jpg" alt="" />
          <p>PARA PICAR</p>
        </SwiperSlide>
        <ParaPicarModal
          open={openParaPicar}
          handleClose={handleCloseParaPicar}
        />
        <SwiperSlide onClick={handleOpenCazuelas}>
          <img src="../../src/assets/cazuelas.jpg" alt="" />
          <p>CAZUELAS</p>
        </SwiperSlide>
        <CazuelasModal open={openCazuelas} handleClose={handleCloseCazuelas} />
        <SwiperSlide onClick={handleOpenEnsaladas}>
          <img src="../../src/assets/ensaladas.jpg" alt="" />
          <p>ENSALADAS</p>
        </SwiperSlide>
        <EnsaladasModal
          open={openEnsaladas}
          handleClose={handleCloseEnsaladas}
        />
        <SwiperSlide>
          <img src="../../src/assets/revueltos.jpg" alt="" />
          <p>REVUELTOS</p>
        </SwiperSlide>
        <SwiperSlide onClick={handleOpenPlatosVeganos}>
          <img src="../../src/assets/platosVeganos.jpg" alt="" />
          <p>PLATOS VEGANOS</p>
        </SwiperSlide>
        <PlatosVeganosModal
          open={openPlatosVeganos}
          handleClose={handleClosePlatosVeganos}
        />
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
