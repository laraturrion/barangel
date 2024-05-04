import { Dialog } from "@mui/material";
import PropTypes from "prop-types";
import "../Modales/modal.css"

function VinosMovil({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose} className="dialogMovil">
     <div className="containerModal">
          <p className="tituloModal">VINOS</p>
          <p className="tituloInglesModal"></p>
          <div className="preciosVinos">
            <div className="vinosDisplay">
              <p className="amarillo tituloVinos">TINTOS</p>
              <div className="comidaPrecio">
                <p className="nombreComidas">
                  BAIGORRI CRIANZA{" "}
                  <span className="amarillo">(D.O. RIOJA)</span>
                </p>
                <p>23 €</p>
              </div>
              <p className="comidaInglesVinos nombreComidas">Botella 75 cl</p>
              <div className="comidaPrecio">
                <p className="nombreComidas">
                  CUNE CRIANZA <span className="amarillo">(D. O. RIOJA)</span>
                </p>
                <p>15 €</p>
              </div>
              <p className="comidaInglesVinos nombreComidas">Botella 75 cl</p>
              <div className="comidaPrecio">
                <p className="nombreComidas">
                  PROTOS ROBLE{" "}
                  <span className="amarillo">(D. O. RIBERA DEL DUERO)</span>
                </p>
                <p>18 €</p>
              </div>
              <p className="comidaInglesVinos nombreComidas">Botella 75 cl</p>
              <div className="comidaPrecio">
                <p className="nombreComidas">
                  M. CORIAS FINCA LOS FRAILES{" "}
                  <span className="amarillo">(D. O. CANGAS)</span>
                </p>
                <p>24 €</p>
              </div>
              <p className="comidaInglesVinos nombreComidas">Botella 75 cl</p>
              <p className="amarillo tituloVinos">ROSADOS</p>
              <div className="comidaPrecio">
                <p className="nombreComidas">
                  ZARAMENDIL <span className="amarillo">(D.O. NAVARRA)</span>
                </p>
                <p>9 €</p>
              </div>
              <p className="comidaInglesVinos nombreComidas">Botella 75 cl</p>
              <div className="comidaPrecio">
                <p className="nombreComidas">
                  PEÑASCAL <span className="amarillo">(Aguja)</span>
                </p>
                <p>9.5 €</p>
              </div>
              <p className="comidaInglesVinos nombreComidas">Botella 75 cl</p>
              <div className="comidaPrecio">
                <p className="nombreComidas">SINFO</p>
                <p>9.5 €</p>
              </div>
              <p className="comidaInglesVinos nombreComidas">Botella 75 cl</p>
              <p className="amarillo tituloVinos">BLANCOS</p>
              <div className="comidaPrecio">
                <p className="nombreComidas">
                  BOYANTE VERDEJO 2022{" "}
                  <span className="amarillo">(D.O. RUEDA)</span>
                </p>
                <p>11 €</p>
              </div>
              <p className="comidaInglesVinos nombreComidas">Botella 75 cl</p>
              <div className="comidaPrecio">
                <p className="nombreComidas">
                  JOSE PARIENTE VERDEJO{" "}
                  <span className="amarillo">(D. O. RUEDA)</span>
                </p>
                <p>22 €</p>
              </div>
              <p className="comidaInglesVinos nombreComidas">Botella 75 cl</p>
              <div className="comidaPrecio">
                <p className="nombreComidas">COSTA DAS DORNAS ALBARIÑO</p>
                <p>13 €</p>
              </div>
              <p className="comidaInglesVinos nombreComidas">Botella 75 cl</p>
              <div className="comidaPrecio">
                <p className="nombreComidas">
                  SEÑORIO LAZOIRO 2022 ALBARIÑO{" "}
                  <span className="amarillo">(D. O. ALBARIÑO)</span>
                </p>
                <p>14 €</p>
              </div>
              <p className="comidaInglesVinos nombreComidas">Botella 75 cl</p>
              <div className="comidaPrecio">
                <p className="nombreComidas">
                  VIÑA ABAD GODELLO{" "}
                  <span className="amarillo">(D. O. VALDEORRAS)</span>
                </p>
                <p>14 €</p>
              </div>
              <p className="comidaInglesVinos nombreComidas">Botella 75 cl</p>
              <div className="comidaPrecio">
                <p className="nombreComidas">
                  MOSCATO MEDITERRANEO PINORD{" "}
                  <span className="amarillo">Espumoso</span>
                </p>
                <p>12 €</p>
              </div>
              <p className="comidaInglesVinos nombreComidas">Botella 70 cl</p>
            </div>
          </div>
        </div>
    </Dialog>
  );
}

VinosMovil.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default VinosMovil;
