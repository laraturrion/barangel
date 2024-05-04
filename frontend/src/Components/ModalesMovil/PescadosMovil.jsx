import { Dialog } from "@mui/material";
import PropTypes from "prop-types";
import "../Modales/modal.css"

function PescadosMovil({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose} className="dialogMovil">
     <div className="containerModal">
          <p className="tituloModal">PESCADOS</p>
          <p className="tituloInglesModal">
            ⎯ <span className="amarillo">Seafood</span> ⎯
          </p>
          <div className="precios">
            <div className="comidaPrecio">
              <p className="nombreComidas">Zamburiñas</p>
              <p>17 €</p>
            </div>
            <p className="comidaIngles nombreComidas">(Local Scallops)</p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Chipirones a la plancha</p>
              <p>15 €</p>
            </div>
            <p className="comidaIngles nombreComidas">(Grilled baby squids)</p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Chipirones encebollados</p>
              <p>16 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Baby squids cooked in onion)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Fritos de Bacalao</p>
              <p>15 €</p>
            </div>
            <p className="comidaIngles nombreComidas">(Crips-fired Codfish)</p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Chipirones fritos</p>
              <p>15 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Crisp-fired baby squids)
            </p>
          </div>
        </div>
    </Dialog>
  );
}

PescadosMovil.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default PescadosMovil;
