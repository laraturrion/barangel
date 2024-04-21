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

export default function PlatosInfantilesModal({ open, handleClose }) {
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
          <p className="tituloModal">PLATOS INFANTILES</p>
          <p className="tituloInglesModal">
            ⎯ <span className="amarillo">Children´s Dishes</span> ⎯
          </p>
          <div className="subtituloComida">
            <p className="amarillo">
              (Todos los platos van acompañados de patatas)
            </p>
            <p>(All these dishes come with potatos)</p>
          </div>
          <div className="precios">
            <div className="comidaPrecio">
              <p className="nombreComidas">Nuggets con croquetas</p>
              <p>9 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Nuggets and croquettes)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Pechuga de pollo con croquetas</p>
              <p>9 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Chicken breast and croquettes)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Lomo con croquetas</p>
              <p>9 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Pork loin and croquettes)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">Lasaña de carne</p>
              <p>9 €</p>
            </div>
            <p className="comidaIngles nombreComidas">(Beef Lasagne)</p>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

PlatosInfantilesModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
