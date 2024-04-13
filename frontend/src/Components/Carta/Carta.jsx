import FotoPortada from "../FotoPortada/FotoPortada";
import Slider from "../Slider/Slider";
import "./carta.css";

export default function Carta() {
  return (
    <div className="contenedorCarta">
      <FotoPortada />
      <Slider />
    </div>
  );
}
