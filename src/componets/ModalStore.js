import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "../../src/App.css";

const endpoint = "http://127.0.0.1:8000/api/kodigo";

const ModalStore = ({ modal, setModal, setRefresh, setAlert }) => {
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
      })
      .then(response => {
        // console.log(response);
        if(response.status === 200){

          setRefresh(true);
          setModal(false);
          setAlert(true);
        }
      })
      .catch(error => {
        console.log(error);
      })

    } catch (err) {
      console.log(err);
    }
  };

  const reset = () => {
    setNombreEstudiante('');
    setBootCamps('');
    setEmpresa('');
    setFechaInicioTrainer('');
    setFechaDuracionTrainer('');
    setFechaTeoricaContratacion('');
    setFechaFacturacion('');
    setDuracionTerminosPago('');
    setSalarioFT('');
    setFechacashin('');
    setFacturado('');
    setnoFacturado('');
  }


  useEffect(() => {
    reset();
  }, [modal]);
  return (
    <Modal show={modal} setModal={false}>
      <Modal.Header>
        <Modal.Title>Informacion Estudiante</Modal.Title>
        <div><a href="#" onClick={()=>setModal(false)}><span class="material-symbols-outlined" id="modal-x">close</span></a></div>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="input-group flex-nowrap">
            <input
              type="text"
              value={NombreEstudiante}
              onChange={(e) => setNombreEstudiante(e.target.value)}
              className="form-control"
              placeholder="Nombre Del Estudiante"
            />
          </div>
          <br />
          <div className="input-group flex-nowrap">
            <input
              type="text"
              value={BootCamps}
              onChange={(e) => setBootCamps(e.target.value)}
              className="form-control"
              placeholder="BootCamps"
            />
          </div>
          <br />
          <div className="input-group flex-nowrap">
            <input
              type="text"
              value={Empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              className="form-control"
              placeholder="Empresa Contratatante"
            />
          </div>
          <br />
          <div className="center">
            <h4 className="h4-i">Fecha Inicio Trainee </h4>
          </div>
          <div class="input-group flex-nowrap">
            <input
              type="date"
              value={FechaInicioTrainer}
              onChange={(e) => setFechaInicioTrainer(e.target.value)}
              className="form-control"
              placeholder="Fecha Inicio Trainee"
            />
          </div>
          <br />
          <div className="center">
            <h4 className="h4-i">Fecha Duracion Trainee</h4>
          </div>
          <div className="input-group flex-nowrap">
            <input
              type="number"
              value={FechaDuracionTrainer}
              onChange={(e) => setFechaDuracionTrainer(e.target.value)}
              className="form-control"
              placeholder="Fecha Duracion Trainee(meses)"
            />
          </div>
          <br />
          
          <div className="center">
            <h4 className="h4-i">Fecha De Facturacion :</h4>
          </div>
          <div className="input-group flex-nowrap">
            <input
              type="date"
              value={FechaFacturacion}
              onChange={(e) => setFechaFacturacion(e.target.value)}
              className="form-control"
              placeholder="Fecha de facturacion"
              aria-describedby="addon-wrapping"
            />
          </div>
          <br />
          <div className="input-group flex-nowrap">
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
          <div className="input-group flex-nowrap">
            <input
              type="number"
              value={SalarioFT}
              onChange={(e) => setSalarioFT(e.target.value)}
              className="form-control"
              placeholder="Salario FT"
              aria-describedby="addon-wrapping"
            />
          </div>
          <br/>
          {/* <div className="center">
            <h4 className="h4-i">Fecha De Pago </h4>
          </div>
          <div className="input-group flex-nowrap">
            <input
              type="date"
              value={Fechacashin}
              onChange={(e) => setFechacashin(e.target.value)}
              className="form-control"
              placeholder="Fecha cash in"
              aria-describedby="addon-wrapping"
            />
            
          </div>
          */}
          <br/>
          <div className="input-group flex-nowrap">
          <select className="form-select form-select-sm" aria-label=".form-select-sm example" value={Facturado} onChange={(e) => setFacturado(e.target.value)}>
          <option selected>Facturado seleccione</option>
          <option value="facturado">Facturado</option>
          <option value="noFacturado">no facturado</option>
          </select><br/>
          </div>
          <br />
          <div className="input-group flex-nowrap">
          <select className="form-select form-select-sm" aria-label=".form-select-sm example" value={noFacturado} onChange={(e) => setnoFacturado(e.target.value)}>
          <option selected>Motivo no facturado selecione</option>
          <option value="Facturado">Facturado</option>
          <option value="No Contratado">No Contratado</option>
          <option value="Abandono">Abandono</option>
          <option value="Salario pediente">Salario pediente</option>
          </select><br/>
          </div>
          <br />
          <div className="modal-footer">
            <button
              type="button"
              className="btn"
              id="boto-m"
              onClick={() => {
                setModal(false);
              }}
            >
              Cerrar
            </button>
            <button onClick={store} className="btn" id="boto-m">
              Guardar
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalStore;
