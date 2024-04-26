import "./footer.css";
import { Link } from "react-router-dom";
export const Footer = () => {

 
  return (
    <>
      <section className="Footer">
        <article className="footerIzquierdo">
          <Link target="_blank" to="https://maps.app.goo.gl/5BuSyGG9SogVQTDM9">
            <div className="localizacion">
              <img
                src="../../src/assets/LogoMapa.svg"
                alt="Logo Mapa"
                className="logoMapa"
              />
              <span>Av. Castilla, 18, 33550 Cangas de Onis, Asturias</span>{" "}
              {/* Texto junto al logo del mapa */}
            </div>
          </Link>

          <div className="telefonoContacto">
            <img
              src="../../src/assets/LogoTelefono.svg"
              alt="Teléfono"
              className="logoTelefono"
            />
            <span className="numeroTelefono">984 51 71 16</span> {/* Texto junto al logo del teléfono */}
          </div>
        </article>
        <article className="Instagram">
          <div className="logoInstagram">
            <a
              href="https://www.instagram.com/barrestauranteangel18/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="../../src/assets/LogoInstagram.svg"
                alt="Logo Instagram"
              />
            </a>
            {/* <span>INSTAGRAM</span> */}{" "}
            {/* Texto junto al logo de Instagram */}
          </div>
        </article>
      </section>
    </>
  );
};

export default Footer;
