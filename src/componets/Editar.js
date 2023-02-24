import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

const Editar = ({ modal, setModal, id, setRefresh }) => {
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

  const edit = async () => {
    await axios
      .get(`http://127.0.0.1:8000/api/kodigo/${id}`)
      .then((response) => {
        // console.log(response);
        setNombreEstudiante(response.data.NombreEstudiante);
        setEmpresa(response.data.Empresa);
        setBootCamps(response.data.BootCamps);
        setFechaInicioTrainer(response.data.FechaInicioTrainer);
        setFechaDuracionTrainer(response.data.FechaDuracionTrainer);
        setFechaTeoricaContratacion(response.data.FechaTeoricaContratacion);
        setFechaFacturacion(response.data.FechaFacturacion);
        setDuracionTerminosPago(response.data.duracionTerminosPago);
        setSalarioFT(response.data.SalarioFT);
        setFechacashin(response.data.Fechacashin);
        setFacturado(response.data.Facturado);
        setnoFacturado(response.data.noFacturado);
      });
  };

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`http://127.0.0.1:8000/api/kodigo/${id}`, {
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
      })
      .then((response) => {
        setRefresh(true);
        setModal(false);
      })
      .catch(error => {
        console.log(error)
      })
  };

  useEffect(() => {
    edit();
  }, [id]);

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
            <button onClick={update} class="btn btn-primary" id="boto-m">
              Guardar
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Editar;
