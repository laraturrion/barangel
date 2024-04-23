import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import FotoPortada from "../FotoPortada/FotoPortada";
import "./contacto.css";

export default function Contacto() {
  return (
    <>
      <Header />
      <FotoPortada />
      <div className="containerContacto">
        <p className="cabeceraContacto">
          ¡Estamos emocionados de saber de ti! Ya sea que desees hacer una
          reserva para una cena especial o simplemente quieras saber más sobre
          nuestro menú, nuestro equipo está aquí para ayudarte. No dudes en
          contactarnos a través de cualquiera de los métodos a continuación:
        </p>
        <p className="visitanosContacto">
          Estamos ubicados en Av. Castilla, 18, 33550 Cangas de Onis, Asturias.
          Nuestro acogedor ambiente y nuestro delicioso menú te esperan.
        </p>
        <p className="telefonoContacto">
          No dudes en llamarnos 984 51 71 16 para reservar
        </p>

        <p className="horario">
           Abrimos todos los días de 11:00 a 00:00, miercoles cerrado por descanso.
        </p>
      </div>
      <Footer />
    </>
  );
}
