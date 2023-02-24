import axios from "axios";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const endpoint = "http://127.0.0.1:8000/api/kodigo";

const ModalStore = ({ modal, setModal, setRefresh }) => {
  const [NombreEstudiante, setNombreEstudiante] = useState("");
  const [BootCamps, setBootCamps] = useState("");
  const [Empresa, setEmpresa] = useState("");
  const [FechaInicioTrainer, setFechaInicioTrainer] = useState("");
  const [FechaDuracionTrainer, setFechaDuracionTrainer] = useState("");
  const [FechaTeoricaContratacion, setFechaTeoricaContratacion] = useState("");
  const [FechaFacturacion, setFechaFacturacion] = useState("");
  const [duracionTerminosPago, setDuracionTerminosPago] = useState("");
  const [SalarioFT, setSalarioFT] = useState("");
  const [Fechacashin, setFechacashin] = useState("");
  const [Facturado, setFacturado] = useState("");
  const [noFacturado, setnoFacturado] = useState("");

  const store = async (e) => {
    e.preventDefault();
    try {
      await axios.post(endpoint, {
        NombreEstudiante: NombreEstudiante,
        BootCamps: BootCamps,
        Empresa: Empresa,
        FechaInicioTrainer: FechaInicioTrainer,
        FechaDuracionTrainer: FechaDuracionTrainer,
        FechaTeoricaContratacion: FechaTeoricaContratacion,
        FechaFacturacion: FechaFacturacion,
        duracionTerminosPago: duracionTerminosPago,
        SalarioFT: SalarioFT,
        Fechacashin: Fechacashin,
        Facturado: Facturado,
        noFacturado: noFacturado,
      });
      setModal(false);
      setRefresh(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Modal show={modal} setModal={false}>
      <Modal.Header>
        <Modal.Title>Informacion Estudiante</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div class="input-group flex-nowrap">
            <input
              type="text"
              value={NombreEstudiante}
              onChange={(e) => setNombreEstudiante(e.target.value)}
              class="form-control"
              placeholder="Nombre Del Estudiante"
            />
          </div>
          <br />
          <div class="input-group flex-nowrap">
            <input
              type="text"
              value={BootCamps}
              onChange={(e) => setBootCamps(e.target.value)}
              class="form-control"
              placeholder="BootCamps"
            />
          </div>
          <br />
          <div class="input-group flex-nowrap">
            <input
              type="text"
              value={Empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              class="form-control"
              placeholder="Empresa Contratatante"
            />
          </div>
          <br />
          <div className="center">
            <h6>Fecha Inicio Trainee </h6>
          </div>
          <div class="input-group flex-nowrap">
            <input
              type="date"
              value={FechaInicioTrainer}
              onChange={(e) => setFechaInicioTrainer(e.target.value)}
              class="form-control"
              placeholder="Fecha Inicio Trainee"
            />
          </div>
          <br />
          <div className="center">
            <h6>Fecha Duracion Trainee</h6>
          </div>
          <div class="input-group flex-nowrap">
            <input
              type="number"
              value={FechaDuracionTrainer}
              onChange={(e) => setFechaDuracionTrainer(e.target.value)}
              class="form-control"
              placeholder="Fecha Duracion Trainee(meses)"
            />
          </div>
          <br />
          <div className="center">
            <h6>Fecha De Cobro Fee :</h6>
          </div>
          <div class="input-group flex-nowrap">
            <input
              type="date"
              value={FechaTeoricaContratacion}
              onChange={(e) => setFechaTeoricaContratacion(e.target.value)}
              class="form-control"
              placeholder="Fecha teorica contratacion FT"
              aria-describedby="addon-wrapping"
            />
          </div>
          <br />
          <div className="center">
            <h6>Fecha De Facturacion :</h6>
          </div>
          <div class="input-group flex-nowrap">
            <input
              type="date"
              value={FechaFacturacion}
              onChange={(e) => setFechaFacturacion(e.target.value)}
              class="form-control"
              placeholder="Fecha de facturacion"
              aria-describedby="addon-wrapping"
            />
          </div>
          <br />
          <div class="input-group flex-nowrap">
            <input
              type="number"
              value={duracionTerminosPago}
              onChange={(e) => setDuracionTerminosPago(e.target.value)}
              class="form-control"
              placeholder="Duracion terminos De Pago"
              aria-describedby="addon-wrapping"
            />
          </div>
          <br />
          <div class="input-group flex-nowrap">
            <input
              type="number"
              value={SalarioFT}
              onChange={(e) => setSalarioFT(e.target.value)}
              class="form-control"
              placeholder="Salario FT"
              aria-describedby="addon-wrapping"
            />
          </div>
          <br />
          <div class="input-group flex-nowrap">
            <input
              type="date"
              value={Fechacashin}
              onChange={(e) => setFechacashin(e.target.value)}
              class="form-control"
              placeholder="Fecha cash in"
              aria-describedby="addon-wrapping"
            />
          </div>
          <br />
          <div class="input-group flex-nowrap">
            <input
              type="text"
              value={Facturado}
              onChange={(e) => setFacturado(e.target.value)}
              class="form-control"
              placeholder="factura n/s"
              aria-describedby="addon-wrapping"
            />
          </div>
          <br />
          <div class="input-group flex-nowrap">
            <input
              type="text"
              value={noFacturado}
              onChange={(e) => setnoFacturado(e.target.value)}
              class="form-control"
              placeholder="motivo no facturado"
              aria-describedby="addon-wrapping"
            />
          </div>
          <br />
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              id="boto-m"
              onClick={() => {
                setModal(false);
              }}
            >
              Cerrar
            </button>
            <button onClick={store} class="btn btn-primary" id="boto-m">
              Guardar
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalStore;
