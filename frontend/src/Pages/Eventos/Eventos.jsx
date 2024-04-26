import "./eventos.css";
import barAngel from "../../../src/assets/videos/barAngel.mp4";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import FotoPortada from "../../Components/FotoPortada/FotoPortada";
import  { useRef } from 'react';

function Eventos() {
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    videoRef.current.muted = true; // Después de la primera reproducción, silencia el video
    videoRef.current.removeEventListener('ended', handleVideoEnded);
    console.log("El video ha terminado de reproducirse.");
  };
  return (
    <>
      <Header />
      <FotoPortada />
      <div className="eventoContainer">
        <span className="textoEvento">
          <p className="cabeceraEvento">
            ¡Bienvenido al lugar donde los sueños de los más pequeños se hacen
            realidad!
          </p>
          <br></br>
          <p className= "cuerpoEvento">
          En nuestro bar, no solo servimos bebidas y comidas deliciosas, sino
          que también nos especializamos en crear momentos mágicos para
          celebraciones inolvidables, especialmente los cumpleaños infantiles.
          <br></br>
          ¡Además, no puedes perderte nuestro parque de bolas!
          <br></br>
          <br></br>
          Contacta con nosotros para un cumpleaños único.
          </p>
        </span>
        <div className="videoAngel">
        <video ref={videoRef} autoPlay loop onEnded={handleVideoEnded}>
            <source src={barAngel} type="video/mp4" />
            {}
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Eventos;
