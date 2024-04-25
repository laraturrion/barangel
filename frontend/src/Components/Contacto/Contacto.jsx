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
          ¡Estamos emocionados de saber de ti! 
          <br></br>

          Disfruta de una excelente comida típica asturiana en Cangas de Onís.
        </p>
        <p className="visitanosContacto">
          Estamos ubicados en Av. Castilla, 18, 33550 Cangas de Onis, Asturias.
          Nuestro acogedor ambiente y nuestro delicioso menú te esperan.
        </p>
        <p className="telefonoContacto">
          No dudes en llamarnos al <p> 984 51 71 16 </p> para reservar
        </p>

        <p className="horario">
           Abrimos todos los días de 10:00 a 00:00, miercoles cerrado por descanso.
        </p>
      </div>
      <div className="separacionFooter"></div>
      <Footer />
    </>
  );
}
