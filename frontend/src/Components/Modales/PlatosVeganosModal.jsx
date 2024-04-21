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

export default function PlatosVeganosModal({ open, handleClose }) {
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
          <p className="tituloModal">PLATOS VEGANOS</p>
          <p className="tituloInglesModal">
            ⎯ <span className="amarillo">Vegan Dishes</span> ⎯
          </p>
          <div className="precios">
            <div className="comidaPrecio">
              <p className="nombreComidas">Seitán al Pedro Ximénez</p>
              <p>10 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Seitan cooked in Pedro Ximenez)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Hamburguesa vegana</p>
              <p>10 €</p>
            </div>
            <p className="comidaIngles nombreComidas">(Vegan Burguer)</p>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

PlatosVeganosModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
