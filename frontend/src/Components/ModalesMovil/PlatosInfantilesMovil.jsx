import { Dialog } from "@mui/material";
import PropTypes from "prop-types";
import "../Modales/modal.css"

function PlatosInfantilesMovil({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose} className="dialogMovil">
     <div className="containerModal">
          <p className="tituloModal">PLATOS INFANTILES</p>
          <p className="tituloInglesModal">
            ⎯ <span className="amarillo">Children´s Dishes</span> ⎯
          </p>
          <div className="subtituloComida">
            <p className="amarillo">
              (Todos los platos van acompañados de patatas)
            </p>
            <p>(All these dishes come with potatos)</p>
          </div>
          <div className="precios">
            <div className="comidaPrecio">
              <p className="nombreComidas">Nuggets con croquetas</p>
              <p>9 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Nuggets and croquettes)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Pechuga de pollo con croquetas</p>
              <p>9 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Chicken breast and croquettes)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Lomo con croquetas</p>
              <p>9 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Pork loin and croquettes)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Lasaña de carne</p>
              <p>9 €</p>
            </div>
            <p className="comidaIngles nombreComidas">(Beef Lasagne)</p>
          </div>
        </div>
    </Dialog>
  );
}

PlatosInfantilesMovil.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default PlatosInfantilesMovil;
