import { Dialog } from "@mui/material";
import PropTypes from "prop-types";
import "../Modales/modal.css"

function PlatoEspecialMovil({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose} className="dialogMovil">
      <div className="containerModal">
          <p className="tituloModal">PLATO ESPECIAL</p>
          <p className="tituloInglesModal">
            ⎯ <span className="amarillo">Special Dish</span> ⎯
          </p>
          <div className="precios">
            <div className="comidaPrecio">
              <p className="nombreComidas">Entrecot Txogitxu</p>
              <p>24 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Txogitxu Steack)
            </p>

            <p>El entrecot Txogitxu es un corte de carne premium que proviene de una raza vacuna autóctona del Pais Vasco. Gracias a su crianza este delicioso entrecot posee un sabor único</p>
          </div>
        </div>
    </Dialog>
  );
}

PlatoEspecialMovil.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default PlatoEspecialMovil;
