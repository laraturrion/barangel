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

export default function RacionesModal({ open, handleClose }) {
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
          <p className="tituloModal">RACIONES</p>
          <p className="tituloInglesModal">
            ⎯ <span className="amarillo">S</span>ervings ⎯
          </p>
          <div className="precios">
            <div className="comidaPrecio">
              <p>Chorizo a la sidra</p>
              <p>9 €</p>
            </div>
            <div className="comidaPrecio">
              <p>Patatas 3 salsas</p>
              <p>8 €</p>
            </div>
            <div className="comidaPrecio">
              <p>Croquetas caseras</p>
              <p>10 €</p>
            </div>
            <div className="comidaPrecio">
              <p>Fabada asturiana</p>
              <p>12 €</p>
            </div>
            <div className="comidaPrecio">
              <p>Tortos típicos</p>
              <p>9 €</p>
            </div>
            <div className="comidaPrecio">
              <p>Huevos rotos con jamón</p>
              <p>12 €</p>
            </div>
            <div className="comidaPrecio">
              <p>
                Alitas de pollo / <span className="amarillo">F</span>ritas o{" "}
                <span className="amarillo">B</span>arbacoa
              </p>
              <p>9 €</p>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

RacionesModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
