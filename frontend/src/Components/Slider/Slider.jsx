import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import EnsaladasModal from "../Modales/EnsaladasModal";
import PlatosInfantilesModal from "../Modales/PlatosInfantilesModal";
import ParaPicarModal from "../Modales/ParaPicarModal";
import CazuelasModal from "../Modales/CazuelasModal";
import PlatosVeganosModal from "../Modales/PlatosVeganosModal";
import CarnesModal from "../Modales/CarnesModal";
import PlatoEspecialModal from "../Modales/PlatoEspecialModal";
import PescadosModal from "../Modales/PescadosModal";
import DeCucharaModal from "../Modales/DeCucharaModal";
import PostresModal from "../Modales/PostresModal";

export default function Slider() {
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

  const [openCarnes, setOpenCarnes] = useState(false);
  const handleOpenCarnes = () => setOpenCarnes(true);
  const handleCloseCarnes = () => setOpenCarnes(false);

  const [openPlatoEspecial, setOpenPlatoEspecial] = useState(false);
  const handleOpenPLatoEspecial = () => setOpenPlatoEspecial(true);
  const handleClosePLatoEspecial = () => setOpenPlatoEspecial(false);

  const [openPescados, setOpenPescados] = useState(false);
  const handleOpenPescados = () => setOpenPescados(true);
  const handleClosePescados = () => setOpenPescados(false);

  const [openDeCuchara, setOpenDeCuchara] = useState(false);
  const handleOpenDeCuchara = () => setOpenDeCuchara(true);
  const handleCloseDeCuchara = () => setOpenDeCuchara(false);

  const [openPostres, setOpenPostres] = useState(false);
  const handleOpenPostres = () => setOpenPostres(true);
  const handleClosePostres = () => setOpenPostres(false);


  return (
    <div>
      <Swiper
        slidesPerView={5}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
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
        <SwiperSlide onClick={handleOpenInfantiles}>
          <img src="../../src/assets/platosInfantiles.jpg" alt="" />
          <p>PLATOS INFANTILES</p>
        </SwiperSlide>
        <PlatosInfantilesModal
          open={openInfantiles}
          handleClose={handleCloseInfantiles}
        />

        <SwiperSlide onClick={handleOpenPlatosVeganos}>
          <img src="../../src/assets/platosVeganos.jpg" alt="" />
          <p>PLATOS VEGANOS</p>
        </SwiperSlide>
        <PlatosVeganosModal
          open={openPlatosVeganos}
          handleClose={handleClosePlatosVeganos}
        />
        <SwiperSlide onClick={handleOpenDeCuchara}>
          <img src="../../src/assets/deCuchara.jpg" alt="" />
          <p>DE CUCHARA</p>
        </SwiperSlide>
        <DeCucharaModal open={openDeCuchara} handleClose ={handleCloseDeCuchara} />
        
  
        <SwiperSlide onClick={handleOpenPescados}>
          <img src="../../src/assets/pescados.jpg" alt="" />
          <p>PESCADOS</p>
        </SwiperSlide>
        <PescadosModal open={openPescados} handleClose={handleClosePescados} />
        <SwiperSlide onClick={handleOpenPLatoEspecial}>
          <img src="../../src/assets/platoEspecial.jpg" alt="" />
          <p>PLATO ESPECIAL</p>
        </SwiperSlide>
        <PlatoEspecialModal open={openPlatoEspecial} handleClose={handleClosePLatoEspecial} />
        <SwiperSlide onClick={handleOpenCarnes}>
          <img src="../../src/assets/carnes.jpg" alt="" />
          <p>CARNES</p>
        </SwiperSlide>
        <CarnesModal open={openCarnes} handleClose={handleCloseCarnes} />
        <SwiperSlide onClick={handleOpenPostres}>
          <img src="../../src/assets/postres.jpg" alt="" />
          <p>POSTRES</p>
        </SwiperSlide>
        <PostresModal open={openPostres} handleClose={handleClosePostres} />
        <SwiperSlide>
          <img src="../../src/assets/vinos.jpg" alt="" />
          <p>VINOS</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
