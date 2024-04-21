import { Box, Modal } from "@mui/material";
import PropTypes from "prop-types";
import "./modal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outlined: "none",
  padding: 0,
};

export default function CazuelasModal({ open, handleClose }) {
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
              <p className="nombreComidas">
                Gulas, gambas y huevos
              </p>
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
              <p className="nombreComidas">
                Verduras salteadas
              </p>
              <p>10 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Sauteed vegetables)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">
                Chorizo y huevos
              </p>
              <p>10 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Chorizo and eggs)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">
                Jamón y huevos
              </p>
              <p>10 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Serrano ham and eggs)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">
                Picadillo y huevos
              </p>
              <p>10 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Minced chorizo and eggs)
            </p>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

CazuelasModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
