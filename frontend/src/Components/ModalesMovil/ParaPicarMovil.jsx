import { Dialog } from "@mui/material";
import PropTypes from "prop-types";

function ParaPicarMovil({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="containerModal">
        <p className="tituloModal">PARA PICAR</p>
        <p className="tituloInglesModal">
          ⎯ <span className="amarillo">Aperitives</span> ⎯
        </p>
        <div className="preciosParaPicar">
          <div className="paraPicarDisplay">
            <div className="comidaPrecio">
              <p className="nombreComidas">Tabla de quesos</p>
              <p>13 €</p>
            </div>
            <p className="comidaIngles nombreComidas">(Cheese Board)</p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Tabla mixta de embutidos y quesos</p>
              <p>15 €</p>
            </div>
            <p className="comidaIngles nombreComidas">(Mixed Board)</p>
            <div className="comidaPrecio">
              <p className="nombreComidas">
                Croquetas / <span className="amarillo">J</span>amón o{" "}
                <span className="amarillo">B</span>oletus
              </p>
              <p>10 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Croquettes / Ham or Boletus)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Chorizo a la sidra</p>
              <p>7.50 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Chorizo cooked in cyder)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Pollo al ajillo</p>
              <p>10 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Chicken with fried garlic)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Revuelto de setas y gambas</p>
              <p>14 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Eggs with mushrooms and shrimps)
            </p>
          </div>
          <div className="paraPicarDisplay">
            <div className="comidaPrecio">
              <p className="nombreComidas">Tabla de embutidos</p>
              <p>14 €</p>
            </div>
            <p className="comidaIngles nombreComidas">(Charcuterie Board)</p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Patatas 3 Salsas</p>
              <p>7.50 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Hand-cut chips with 3 sauces)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Tortos variados</p>
              <p>10 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Traditional Fried cornbread)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Alitas de pollo</p>
              <p>10 €</p>
            </div>
            <p className="comidaIngles nombreComidas">(Fried chicken wings)</p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Gambas al ajillo</p>
              <p>15 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Praws cooked in garlic)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Calamares a la romana</p>
              <p>14 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Crisp-fried battered squis rings)
            </p>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

ParaPicarMovil.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ParaPicarMovil;
