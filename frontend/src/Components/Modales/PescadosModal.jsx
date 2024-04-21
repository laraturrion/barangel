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

export default function PescadosModal({ open, handleClose }) {
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
          <p className="tituloModal">PESCADOS</p>
          <p className="tituloInglesModal">
            ⎯ <span className="amarillo">Seafood</span> ⎯
          </p>
          <div className="precios">
            <div className="comidaPrecio">
              <p className="nombreComidas">Zamburiñas</p>
              <p>17 €</p>
            </div>
            <p className="comidaIngles nombreComidas">(Local Scallops)</p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Chipirones a la plancha</p>
              <p>15 €</p>
            </div>
            <p className="comidaIngles nombreComidas">(Grilled baby squids)</p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Chipirones encebollados</p>
              <p>16 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Baby squids cooked in onion)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Fritos de Bacalao</p>
              <p>15 €</p>
            </div>
            <p className="comidaIngles nombreComidas">(Crips-fired Codfish)</p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Chipirones fritos</p>
              <p>15 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Crisp-fired baby squids)
            </p>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

PescadosModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
