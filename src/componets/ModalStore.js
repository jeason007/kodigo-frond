import axios from 'axios';
import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';

const endpoint = "http://127.0.0.1:8000/api/kodigo";

const ModalStore = ({modal, setModal, setRefresh}) => {

    const [NombreEstudiante, setNombreEstudiante] = useState("");
    const [Empresa, setEmpresa] = useState("");
    const [BootCamps, setBootCamps] = useState("");
    const [FechaFinal, setFechaFinal] = useState("");
    const [FechaInicio, setFechaInicio] = useState("");
    const [MontoCobrar, setMontoCobrar] = useState("");
    const [CobroFee, setCobroFee] = useState("");


    const store = async (e) => {
        e.preventDefault();
        try {
          await axios.post(endpoint, {
            NombreEstudiante: NombreEstudiante,
            BootCamps: BootCamps,
            Empresa: Empresa,
            FechaInicio: FechaInicio,
            FechaFinal: FechaFinal,
            CobroFee: CobroFee,
            MontoCobrar: MontoCobrar,
          });
          setModal(false);
          setRefresh(true);
        } catch (err) {
          console.log(err);
        }
      };
  return (
    <Modal show={modal} setModal={false}>
        <Modal.Header >
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
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
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
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
                <br />
                <div class="input-group flex-nowrap">
                  <input
                    type="text"
                    value={Empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    class="form-control"
                    placeholder="Empresa Contratada"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
                <br />
                <div className="center">
                  <h6>Fecha Inicio :</h6>
                </div>
                <div class="input-group flex-nowrap">
                  <input
                    type="date"
                    value={FechaInicio}
                    onChange={(e) => setFechaInicio(e.target.value)}
                    class="form-control"
                    placeholder="Fecha de inicio"
                    aria-describedby="addon-wrapping"
                  />
                </div>
                <br />
                <div className="center">
                  <h6>Fecha Final :</h6>
                </div>
                <div class="input-group flex-nowrap">
                  <input
                    type="date"
                    value={FechaFinal}
                    onChange={(e) => setFechaFinal(e.target.value)}
                    class="form-control"
                    placeholder="Fecha De Final"
                    aria-describedby="addon-wrapping"
                  />
                </div>
                <br />
                <div className="center">
                  <h6>Fecha De Cobro Fee :</h6>
                </div>
                <div class="input-group flex-nowrap">
                  <input
                    type="date"
                    value={CobroFee}
                    onChange={(e) => setCobroFee(e.target.value)}
                    class="form-control"
                    placeholder="Fecha Cobro Fee"
                    aria-describedby="addon-wrapping"
                  />
                </div>
                <br />
                <div class="input-group flex-nowrap">
                  <input
                    type="text"
                    value={MontoCobrar}
                    onChange={(e) => setMontoCobrar(e.target.value)}
                    class="form-control"
                    placeholder="Monto adeudado"
                    aria-describedby="addon-wrapping"
                  />
                </div>
                <br />
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={()=>{setModal(false)}}
                  >
                    Cerrar
                  </button>
                  <button type="button" onClick={store} class="btn btn-primary">
                    Guardar
                  </button>
                </div>
              </form>
        </Modal.Body>
    </Modal>
  );
}

export default ModalStore