import "./eventos.css";
import barAngel from "./assets/videos/barAngel.mp4";
import Header from './Components/Header';
import Footer from './Components/Footer';

export default function Eventos() {
  return (
    <>
    < Header/>
      <div className="videoAngel">
        <video autoPlay loop muted>
          {}
          <source src={barAngel} type="video/mp4" />
          {}
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
      < Footer/>
    </>
  );
}


