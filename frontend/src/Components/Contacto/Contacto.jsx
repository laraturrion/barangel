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
          Visítanos Ven a disfrutar de una experiencia gastronómica única en
          nuestro restaurante. Estamos ubicados en Av. Castilla, 18, 33550
          Cangas de Onis, Asturias. Nuestro acogedor ambiente y nuestro
          delicioso menú te esperan.
        </p>
        <p className="telefonoContacto">
          Llámanos Si prefieres hablar directamente con nosotros, no dudes en
          llamarnos al [número de teléfono]. Estamos disponibles durante horas
          de operación para atender tus llamadas y responder tus preguntas.
        </p>

        <p className="redesContacto">
          Síguenos en Redes Sociales Mantente al día con nuestras últimas
          novedades, promociones y eventos siguiéndonos en nuestras redes
          sociales: Facebook: [enlace a la página de Facebook] Instagram:
          [enlace a la cuenta de Instagram]
        </p>

        <p className="horario">
          Horario de Atención Estamos abiertos [días de la semana] de [horario
          de apertura] a [horario de cierre]. ¡Esperamos verte pronto!
        </p>
      </div>
      <Footer />
    </>
  );
}
