import { Dialog } from "@mui/material";
import PropTypes from "prop-types";
import "../Modales/modal.css";

function PlatosVeganosMovil({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose} className="dialogMovil">
      <div className="containerModal">
        <p className="tituloModal">PLATOS VEGANOS</p>
        <p className="tituloInglesModal">
          ⎯ <span className="amarillo">Vegan Dishes</span> ⎯
        </p>
        <div className="precios">
          <div className="comidaPrecio">
            <p className="nombreComidas">Seitán al Pedro Ximénez</p>
            <p>10 €</p>
          </div>
          <p className="comidaIngles nombreComidas">
            (Seitan cooked in Pedro Ximenez)
          </p>
          <div className="comidaPrecio">
            <p className="nombreComidas">Hamburguesa vegana</p>
            <p>10 €</p>
          </div>
          <p className="comidaIngles nombreComidas">(Vegan Burguer)</p>
        </div>
      </div>
    </Dialog>
  );
}

PlatosVeganosMovil.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default PlatosVeganosMovil;
