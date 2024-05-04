import { Dialog } from "@mui/material";
import PropTypes from "prop-types";
import "../Modales/modal.css"

function DeCucharaMovil({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose} className="dialogMovil">
     <div className="containerModal">
          <p className="tituloModal">DE CUCHARA</p>
          <p className="tituloInglesModal">
            ⎯ <span className="amarillo">Spoon Dishes</span> ⎯
          </p>
          <div className="precios">
            <div className="comidaPrecio">
              <p className="nombreComidas"> Fabada</p>
              <p>13 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Traditional Asturian stew)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Sopa de Marisco</p>
              <p>10 €</p>
            </div>
            <p className="comidaIngles nombreComidas">(Seafood Soup)</p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Pote</p>
              <p>13 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Fabada with potatoes adn cabbage)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Sopa de hígado</p>
              <p>10 €</p>
            </div>
            <p className="comidaIngles nombreComidas">(Liver soup)</p>
          </div>
        </div>
    </Dialog>
  );
}

DeCucharaMovil.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default DeCucharaMovil;
