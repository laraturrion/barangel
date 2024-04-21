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

export default function PlatoEspecialModal({ open, handleClose }) {
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
          <p className="tituloModal">PLATO ESPECIAL</p>
          <p className="tituloInglesModal">
            ⎯ <span className="amarillo">Special Dish</span> ⎯
          </p>
          <div className="precios">
            <div className="comidaPrecio">
              <p className="nombreComidas">Entrecot Txogitxu</p>
              <p>24 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Txogitxu Steack)
            </p>

            <p>El entrecot Txogitxu es un corte de carne premium que proviene de una raza vacuna autóctona del Pais Vasco. Gracias a su crianza este delicioso entrecot posee un sabor único</p>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

PlatoEspecialModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
