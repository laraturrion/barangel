import "./eventos.css";
import barAngel from "../../../src/assets/videos/barAngel.mp4";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import FotoPortada from "../../Components/FotoPortada/FotoPortada";

function Eventos() {
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
          Contacta con nosotros para un cumpleaños inolvidable
          </p>
        </span>
        <div className="videoAngel">
          <video autoPlay loop muted>
            {}
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
