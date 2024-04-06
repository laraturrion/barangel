import "./footer.css";

export const Footer = () => {
  return (
    <>
      <section className="Footer">
      <article className="footerIzquierdo">
        <div className="localizacion">
          <img
            src="ruta-al-logo-mapa.png"
            alt="Logo Mapa"
            className="logoMapa"
          />
          <span>Av. Castilla, 18, 33550 Cangas de Onis, Asturias</span> {/* Texto junto al logo del mapa */}
        </div>
        <div className="telefonoContacto">
          <img
            src="ruta-al-logo-telefono.png"
            alt="Logo Teléfono"
            className="logoTelefono"
          />
          <span>984 51 71 16</span> {/* Texto junto al logo del teléfono */}
        </div>
        </article>
        <article className="Instagram">
        <div className="logoInstagram">
          <img src="ruta-al-logo-instagram.png" alt="Logo Instagram" />
          <span>INSTAGRAM</span> {/* Texto junto al logo de Instagram */}
        </div>
      </article>
      </section>
    </>
  );
};

export default Footer;
