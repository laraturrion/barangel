import { Dialog } from "@mui/material";
import PropTypes from "prop-types";
import "../Modales/modal.css"

function EnsaladasMovil({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose} className="dialogMovil">
      <div className="containerModal">
          <p className="tituloModal">ENSALADAS</p>
          <p className="tituloInglesModal">
            ⎯ <span className="amarillo">Salads</span> ⎯
          </p>
          <div className="precios">
            <div className="comidaPrecio">
              <p className="nombreComidas">
                LTC / <span className="amarillo">L</span>echuga, tomate y
                cebolla
              </p>
              <p>7 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Lettuce, tomato and onion)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">
                Ensalada mixta / <span className="amarillo">L</span>echuga,
                tomate, cebolla, zanahoria, bonito, espárrago y huevo.
              </p>
              <p>11 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Lettuce, tomato, onion, carrot, tuna, asparagus and hard-boiled
              eggs)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">
                Ensalada templada / <span className="amarillo">S</span>etas,
                lechuga, tomate y queso de cabra.
              </p>
              <p>15 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Mushrooms, lettuce, tomato and goat cheese)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">
                Ensalada del cantábrico / <span className="amarillo">A</span>
                nchoas, pimiento asado y queso vidiago.
              </p>
              <p>16 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Anchovies, roasted pepper and Vidiago cheese)
            </p>
          </div>
        </div>
    </Dialog>
  );
}

EnsaladasMovil.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default EnsaladasMovil;
