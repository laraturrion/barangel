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
          <p className="tituloModal">ENSALADAS</p>
          <p className="tituloInglesModal">
            ⎯ <span className="amarillo">Salads</span> ⎯
          </p>
          <div className="precios">
            <div className="comidaPrecio">
              <p className="nombreComidas">
                LTC / <span className="amarillo">L</span>echuga, tomate y
                cebolla
              </p>
              <p>7 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Lettuce, tomato and onion)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">
                Ensalada mixta / <span className="amarillo">L</span>echuga,
                tomate, cebolla, zanahoria, bonito, espárrago y huevo.
              </p>
              <p>11 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Lettuce, tomato, onion, carrot, tuna, asparagus and hard-boiled
              eggs)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">
                Ensalada templada / <span className="amarillo">S</span>etas,
                lechuga, tomate y queso de cabra.
              </p>
              <p>15 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Mushrooms, lettuce, tomato and goat cheese)
            </p>
            <div className="comidaPrecio">
              <p className="nombreComidas">
                Ensalada del cantábrico / <span className="amarillo">A</span>
                nchoas, pimiento asado y queso vidiago.
              </p>
              <p>16 €</p>
            </div>
            <p className="comidaIngles nombreComidas">
              (Anchovies, roasted pepper and Vidiago cheese)
            </p>
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
