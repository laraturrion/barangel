import FotoPortada from "../FotoPortada/FotoPortada";
import Slider from "../Slider/Slider";
import SliderMovil from "../SliderMovil/SliderMovil";

import "./carta.css";

export default function Carta() {
  return (
    <div className="contenedorCarta">
      <FotoPortada />
      {window.innerWidth >= 600 ? <Slider/> : <SliderMovil />}
    </div>
  );
}
