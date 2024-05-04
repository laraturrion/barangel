import { Dialog } from "@mui/material";
import PropTypes from "prop-types";
import "../Modales/modal.css"

function CarnesMovil({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose} className="dialogMovil">
      <div className="containerModal">
          <p className="tituloModal">CARNES</p>
          <p className="tituloInglesModal">
            ⎯ <span className="amarillo">Meats</span> ⎯
          </p>
          <div className="subtituloComida">
            <p className="amarillo">
              (Todos nuestros cachopos se pueden hacer sin gluten)
            </p>
            <p>
              ("cachopo" is a thinly sliced beef, layered woth different options
              of your choice, then breaded and deep fried, all cachopos can be
              made gluten-free)
            </p>
          </div>
          <div className="preciosParaPicar">
            <div className="paraPicarDisplay">
              <div className="comidaPrecio">
                <p className="nombreComidas">Escalopines al cabrales</p>
                <p>14 €</p>
              </div>
              <p className="comidaIngles nombreComidas">
                (Breaded and fried beef with Cabrales sauce)
              </p>
              <div className="comidaPrecio">
                <p className="nombreComidas">Cachopo de cecina</p>
                <p>20 €</p>
              </div>
              <p className="comidaIngles nombreComidas">
                (Cachopo with beef ham)
              </p>
              <div className="comidaPrecio">
                <p className="nombreComidas">Cachopo de setas</p>
                <p>20 €</p>
              </div>
              <p className="comidaIngles nombreComidas">
                (Cachopo with mushrooms)
              </p>
              <div className="comidaPrecio">
                <p className="nombreComidas">Cachopo de jamón</p>
                <p>20 €</p>
              </div>
              <p className="comidaIngles nombreComidas">
                (Cachopo with spanish ham)
              </p>
              <div className="comidaPrecio">
                <p className="nombreComidas">Cabritu guisau</p>
                <p>16 €</p>
              </div>
              <p className="comidaIngles nombreComidas">
                (Traditional stewed baby goat)
              </p>
              <div className="comidaPrecio">
                <p className="nombreComidas">Callos caseros</p>
                <p>14 €</p>
              </div>
              <p className="comidaIngles nombreComidas">
                (Homemade tripe stew)
              </p>
              <div className="comidaPrecio">
                <p className="nombreComidas">Oreja guisada</p>
                <p>10 €</p>
              </div>
              <p className="comidaIngles nombreComidas">(Stewed pig´s ear)</p>
              <div className="comidaPrecio">
                <p className="nombreComidas">Entrecot con patatas y huevos</p>
                <p>12 €</p>
              </div>
              <p className="comidaIngles nombreComidas">
                (Entrecôte with potatoes and fried eggs)
              </p>
              <div className="comidaPrecio">
                <p className="nombreComidas">Hamburguesa</p>
                <p>8.50 €</p>
              </div>
              <p className="comidaIngles nombreComidas">
                (Hamburger: beef, onion, cheese, lettuce, tomato and egg)
              </p>
            </div>
          </div>
        </div>
    </Dialog>
  );
}

CarnesMovil.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default CarnesMovil;
