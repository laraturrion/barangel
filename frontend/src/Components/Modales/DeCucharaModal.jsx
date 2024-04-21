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

export default function DeCucharaModal({ open, handleClose }) {
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
      </Box>
    </Modal>
  );
}

DeCucharaModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
