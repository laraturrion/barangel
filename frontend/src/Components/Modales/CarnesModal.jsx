/* eslint-disable react/no-unescaped-entities */
import { Box, Modal } from "@mui/material";
import PropTypes from "prop-types";
import "./modal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outlined: "none",
  padding: 0,
};

export default function CarnesModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="fondoModal"
    >
      <Box sx={style}>
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
            </div>
            <div className="paraPicarDisplay">
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
              <p className="comidaIngles nombreComidas">(Stewed pig's ear)</p>
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
      </Box>
    </Modal>
  );
}

CarnesModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
