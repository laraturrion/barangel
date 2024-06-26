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

export default function PostresModal({ open, handleClose }) {
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
      </Box>
    </Modal>
  );
}

PostresModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
