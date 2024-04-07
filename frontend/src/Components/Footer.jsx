import "./footer.css";

export const Footer = () => {
  return (
    <>
      <section className="Footer">
        <article className="footerIzquierdo">
          <div className="localizacion">
            <img
              src="../../src/assets/LogoMapa.svg"
              alt="Logo Mapa"
              className="logoMapa"
            />
            <span>Av. Castilla, 18, 33550 Cangas de Onis, Asturias</span>{" "}
            {/* Texto junto al logo del mapa */}
          </div>
          <div className="telefonoContacto">
            <img
              src="../../src/assets/LogoTelefono.svg"
              alt="Teléfono"
              className="logoTelefono"
            />
            <span>984 51 71 16</span> {/* Texto junto al logo del teléfono */}
          </div>
        </article>
        <article className="Instagram">
          <div className="logoInstagram">
            <a href="https://www.instagram.com/barrestauranteangel18/">
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
