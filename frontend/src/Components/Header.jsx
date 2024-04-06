import "./header.css";

export const Header = () => {
  return (
    <>
      <nav className="navegador">
        <div className="tituloLogo">BAR ANGEL</div>
        <article className=" seccionNav">
          <div className="seccionEventos">EVENTOS Y CELEBRACIONES</div>
          <div className="seccionContacto">CONTACTO</div>
        </article>
      </nav>
    </>
  );
};
