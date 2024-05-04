import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import ParaPicarMovil from "../ModalesMovil/ParaPicarMovil";
import CarnesMovil from "../ModalesMovil/CarnesMovil";
import PlatoEspecialMovil from "../ModalesMovil/PlatoEspecialMovil";
import CazuelasMovil from "../ModalesMovil/CazuelasMovil";
import EnsaladasMovil from "../ModalesMovil/EnsaladasMovil";
import PlatosInfantilesMovil from "../ModalesMovil/PlatosInfantilesMovil";
import PlatosVeganosMovil from "../ModalesMovil/PlatosVeganosMovil";
import DeCucharaMovil from "../ModalesMovil/DeCucharaMovil";
import PescadosMovil from "../ModalesMovil/PescadosMovil";
import PostresMovil from "../ModalesMovil/PostresMovil";
import VinosMovil from "../ModalesMovil/VinosMovil";

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

  const [openVinos, setOpenVinos] = useState(false);
  const handleOpenVinos = () => setOpenVinos(true);
  const handleCloseVinos = () => setOpenVinos(false);

  return (
    <div>
      <div className="slider-container">
        <div className="categories">
          <div className="category" onClick={handleOpenParaPicar}>
            <img src="../../src/assets/raciones.jpg" alt="" />
            <p>PARA PICAR</p>
          </div>
          <ParaPicarMovil
            open={openParaPicar}
            handleClose={handleCloseParaPicar}
          />
          <div className="category" onClick={handleOpenCazuelas}>
            <img src="../../src/assets/cazuelas.jpg" alt="" />
            <p>CAZUELAS</p>
          </div>
          <CazuelasMovil
            open={openCazuelas}
            handleClose={handleCloseCazuelas}
          />
          <div className="category" onClick={handleOpenEnsaladas}>
            <img src="../../src/assets/ensaladas.jpg" alt="" />
            <p>ENSALADAS</p>
          </div>
          <EnsaladasMovil
            open={openEnsaladas}
            handleClose={handleCloseEnsaladas}
          />
          <div className="category" onClick={handleOpenInfantiles}>
            <img src="../../src/assets/platosInfantiles.jpg" alt="" />
            <p>PLATOS INFANTILES</p>
          </div>
          <PlatosInfantilesMovil
            open={openInfantiles}
            handleClose={handleCloseInfantiles}
          />

          <div className="category" onClick={handleOpenPlatosVeganos}>
            <img src="../../src/assets/platosVeganos.jpg" alt="" />
            <p>PLATOS VEGANOS</p>
          </div>
          <PlatosVeganosMovil
            open={openPlatosVeganos}
            handleClose={handleClosePlatosVeganos}
          />
          <div className="category" onClick={handleOpenDeCuchara}>
            <img src="../../src/assets/deCuchara.jpg" alt="" />
            <p>DE CUCHARA</p>
          </div>
          <DeCucharaMovil
            open={openDeCuchara}
            handleClose={handleCloseDeCuchara}
          />

          <div className="category" onClick={handleOpenPescados}>
            <img src="../../src/assets/pescados.jpg" alt="" />
            <p>PESCADOS</p>
          </div>
          <PescadosMovil
            open={openPescados}
            handleClose={handleClosePescados}
          />
          <div className="category" onClick={handleOpenPLatoEspecial}>
            <img src="../../src/assets/platoEspecial.jpg" alt="" />
            <p>PLATO ESPECIAL</p>
          </div>
          <PlatoEspecialMovil
            open={openPlatoEspecial}
            handleClose={handleClosePLatoEspecial}
          />
          <div className="category" onClick={handleOpenCarnes}>
            <img src="../../src/assets/carnes.jpg" alt="" />
            <p>CARNES</p>
          </div>
          <CarnesMovil open={openCarnes} handleClose={handleCloseCarnes} />
          <div className="category" onClick={handleOpenPostres}>
            <img src="../../src/assets/postres.jpg" alt="" />
            <p>POSTRES</p>
          </div>
          <PostresMovil open={openPostres} handleClose={handleClosePostres} />
          <div className="category" onClick={handleOpenVinos}>
            <img src="../../src/assets/vinos.jpg" alt="" />
            <p>VINOS</p>
          </div>
          <VinosMovil open={openVinos} handleClose={handleCloseVinos} />
        </div>
      </div>
    </div>
  );
}
