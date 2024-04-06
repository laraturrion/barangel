import FotoPortada from "./FotoPortada";
import Slider from "./Slider";
import "./carta.css";

export default function Carta() {
  return (
    <div className="contenedorCarta">
      <FotoPortada />
      <Slider />
    </div>
  );
}
