import { Dialog } from "@mui/material";
import PropTypes from "prop-types";
import "../Modales/modal.css";

function CazuelasMovil({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose} className="dialogMovil">
      <div className="containerModal">
        <p className="tituloModal">CAZUELAS</p>
        <p className="tituloInglesModal">
          ⎯ <span className="amarillo">Casseroles</span> ⎯
        </p>
        <div className="subtituloComida">
          <p className="amarillo">
            (Todas nuestras cazuelas van acompañadas de patatas)
          </p>
          <p>(All these casseroles come with potatoes)</p>
        </div>
        <div className="precios">
          <div className="comidaPrecio">
            <p className="nombreComidas">Gulas, gambas y huevos</p>
            <p>14 €</p>
          </div>
          <p className="comidaIngles nombreComidas">
            (Elvers, shrimps and eggs)
          </p>
          <div className="comidaPrecio">
            <p className="nombreComidas">
              Queso de cabra, cecina y cebolla caramelizada
            </p>
            <p>14 €</p>
          </div>
          <p className="comidaIngles nombreComidas">
            (Goat cheese, beef ham and caramelized onion)
          </p>
          <div className="comidaPrecio">
            <p className="nombreComidas">Verduras salteadas</p>
            <p>10 €</p>
          </div>
          <p className="comidaIngles nombreComidas">(Sauteed vegetables)</p>
          <div className="comidaPrecio">
            <p className="nombreComidas">Chorizo y huevos</p>
            <p>10 €</p>
          </div>
          <p className="comidaIngles nombreComidas">(Chorizo and eggs)</p>
          <div className="comidaPrecio">
            <p className="nombreComidas">Jamón y huevos</p>
            <p>10 €</p>
          </div>
          <p className="comidaIngles nombreComidas">(Serrano ham and eggs)</p>
          <div className="comidaPrecio">
            <p className="nombreComidas">Picadillo y huevos</p>
            <p>10 €</p>
          </div>
          <p className="comidaIngles nombreComidas">
            (Minced chorizo and eggs)
          </p>
        </div>
      </div>
    </Dialog>
  );
}

CazuelasMovil.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default CazuelasMovil;
