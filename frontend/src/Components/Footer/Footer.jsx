import "./footer.css";

 
export const Footer = () => {

  const enlaceGoogleMaps= 'https://www.google.es/maps/place/Bar+Restaurante+Angel/@43.3482069,-5.1337541,17z/data=!4m7!3m6!1s0xd36216edcd5f09b:0x7138c354bbee3b0a!8m2!3d43.3482069!4d-5.1311792!10e2!16s%2Fg%2F11txpctkj7?entry=ttu'
  return (
    <>
      <section className="Footer">
        <article className="footerIzquierdo">
          <div className="localizacion">
          <a href={enlaceGoogleMaps} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit',textDecoration: 'none' }}>
            <img
              src="../../src/assets/LogoMapa.svg"
              alt="Logo Mapa"
              className="logoMapa"
            />
            <span>Av. Castilla, 18, 33550 Cangas de Onis, Asturias</span>{" "}
            {/* Texto junto al logo del mapa */}
            </a>
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
            <a href="https://www.instagram.com/barrestauranteangel18/" target="_blank" rel="noreferrer">
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
