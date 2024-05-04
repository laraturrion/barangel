import { Dialog } from "@mui/material";
import PropTypes from "prop-types";
import "../Modales/modal.css"

function PostresMovil({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose} className="dialogMovil">
     <div className="containerModal">
          <p className="tituloModal">POSTRES</p>
          <p className="tituloInglesModal">
            ⎯ <span className="amarillo">Seafood</span> ⎯
          </p>
          <div className="precios">
            <div className="comidaPrecio">
              <p className="nombreComidas">Tarta de la abuela</p>
              <p>4,50 €</p>
            </div>
            <p className="comidaIngles nombreComidas">(Cookie, custard and chocolate cake)</p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Arroz con leche</p>
              <p>4 €</p>
            </div>
            <p className="comidaIngles nombreComidas">(Rice pudding)</p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Tarta de oreo</p>
              <p>5 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Oreo Cake)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Tarta de Queso</p>
              <p>4,5 €</p>
            </div>
            <p className="comidaIngles nombreComidas">(Cheesecake)</p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Flan de Coco</p>
              <p>4 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Coconut Flan)
            </p>
          </div>
        </div>
    </Dialog>
  );
}

PostresMovil.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default PostresMovil;
