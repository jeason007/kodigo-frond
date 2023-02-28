import "../../src/App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Editar from "./Editar";




const Estudiantes = ({ refresh, setRefresh  }) => {
  const endpoint = "http://127.0.0.1:8000/api";
  //asignamos un estado ..........
  const [estudiant, setEstudiant] = useState([]);
  const [tablaEstu, setTablaEstu] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [id, setId] = useState("");
  const [modalEdit, setModalEdit] = useState(false);
  
  
  
  

  const busquedaCambio = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    // eslint-disable-next-line array-callback-return
    let resultadoBusqueda = tablaEstu.filter((elemento) => {
      if (
        elemento.NombreEstudiante.toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.Empresa.toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setEstudiant(resultadoBusqueda);
  };

  //usamos useEffect para hacer una funcion asincrona....
  useEffect(() => {
    if (refresh) {
      setRefresh();
      getAllEstudents();
    
     

     
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  //hacemos una funcion donde se hara la consulta
  const getAllEstudents = async () => {
    const respuesta = await axios.get(`${endpoint}/kodigo`);
    setEstudiant(respuesta.data);
    setTablaEstu(respuesta.data);
  
    

  };

  const borrarEstudiantes = async (id) => {
    await axios.delete(`${endpoint}/kodigo/${id}`);
    getAllEstudents();
  };

  return (
    <body className="bo">
      
      <div className="buscador">
        <div class="input-group mb-3" id="inpu-conta">
          <span class="input-group-text" id="basic-addon1">
            <span class="material-icons">
              <span class="material-icons" id="ico">
                person_search
              </span>
            </span>
          </span>
          <input
            type="text"
            value={busqueda}
            class="form-control"
            placeholder="Buscar Alumno......"
            aria-label="Example text with button addon"
            id="inpu"
            aria-describedby="button-addon1"
            onChange={busquedaCambio}
          />
        </div>
      </div>
      {estudiant.map((estudiante) => (
        <>
          <div key={estudiante.id}>
            <div
              class="btn"
              data-bs-toggle="collapse"
              href={`#n${estudiante.id}`}
              role="button"
              aria-expanded="false"
              aria-controls="collapse"
              id="bot"
              data-collapsible="accordion">
              <span class="material-symbols-outlined" id="circle">person</span>
              <h2 className="name">{estudiante.NombreEstudiante}</h2>
              <h2 className="id">{estudiante.id}</h2>
             
            </div>

            <div class="collapse" id={`n${estudiante.id}`}>
             <div class="card card-body" id="card">
              <div className="boto-edit">
                     <button
                        type="button"
                        onClick={() => {
                          setId(estudiante.id);
                          setModalEdit(true);
                        }}
                        class="btn"
                        id="boto-a"><span class="material-symbols-outlined" id="dele">update</span> &nbsp;Actualizar</button>

                       <button
                        type="button"
                        onClick={() => borrarEstudiantes(estudiante.id)}
                        class="btn"
                        id="boto-a"><span class="material-symbols-outlined" id="dele">delete</span> &nbsp;Eliminar</button>

              </div><br/><br/>
             <div class="container text-center">
            {/*firts data component*/}
             <div class="row align-items-start">
             <div class="col">
               <h6>Nombre Empresa</h6>
               <p>{estudiante.Empresa}</p>
             </div>
             <div class="col">
             <h6>Fecha Tiempo Trainee</h6>
               <p> Meses {estudiante.FechaDuracionTrainer}</p>
             </div>
             <div class="col">
             <h6>Duracion Termino De Pago</h6>
               <p>Dia de mes {estudiante.duracionTerminosPago}</p> 
             </div>
             
             </div>
             {/*end...................*/}

             {/*second data component*/}
             <div class="row align-items-start">
             <div class="col">
               <h6>Bootcamp Cursado</h6>
               <p>{estudiante.BootCamps}</p>
             </div>
             <div class="col">
             <h6>Fecha Teorica Contratacion FT</h6>
               <p>{estudiante.FechaTeoricaContratacion}</p>
             </div>
             <div class="col">
             <h6>Salario FT</h6>
               <p> $ {estudiante.SalarioFT}</p>
             </div>
             
             </div>
             {/*end...................*/}

             {/*third data component*/}
             <div class="row align-items-start">
             <div class="col">
               <h6>Fecha De Inicio Trainee</h6>
               <p>{estudiante.FechaInicioTrainer}</p>
             </div>
             <div class="col">
             <h6>Fecha De Facturacion</h6>
               <p>{estudiante.FechaFacturacion}</p>
             </div>
             <div class="col">
             <h6>Fecha De Pago</h6>
               <p>{estudiante.Fechacashin}</p>
             </div>
            
             </div>
             {/*end...................*/}

             {/*four data component*/}
             <div class="row align-items-start">
             <div class="col">
             <h6>Fecha De Pago</h6>
               <p>{estudiante.Fechacashin}</p>
             </div>
             <div class="col">
             <h6>Facturado </h6>
               <p>{estudiante.Facturado}</p> 
             </div>
             <div class="col">
             <h6>NO Facturado</h6>
               <p>{estudiante.noFacturado}</p>
             </div>
             
             </div>
             
             {/*end...................*/}
</div>
               


              </div>
            </div>
          </div>
        </>
      ))}

      <div>
        <div
          class="modal fade"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  New message
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body"></div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Editar
        modal={modalEdit}
        setModal={setModalEdit}
        id={id}
        setRefresh={setRefresh}
      />
      
    </body>
  );
};

export default Estudiantes;
