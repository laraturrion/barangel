import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <>
      <nav className="navegador">
        <Link to="/">
          <div className="tituloLogo">BAR ANGEL</div>
        </Link>
        <article className=" seccionNav">
          <Link to="/eventos">
            <div className="seccionEventos">EVENTOS Y CELEBRACIONES</div>
          </Link>
          <Link to="/contacto">
            <div className="seccionContacto">CONTACTO</div>
          </Link>
        </article>
      </nav>
    </>
  );
};
