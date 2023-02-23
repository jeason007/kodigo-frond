import '../../src/App.css';
import React,{useEffect,useState} from "react";
import axios from "axios";


const Estudiantes = () => {
const endpoint = 'http://127.0.0.1:8000/api';
//asignamos un estado ..........
const [estudiant, setEstudiant] = useState([]);
const [tablaEstu, setTablaEstu] = useState([]);
const [busqueda, setBusqueda] = useState('');


const busquedaCambio = e =>{
  setBusqueda(e.target.value);
  filtrar(e.target.value);
}

const filtrar =(terminoBusqueda)=>{
  let resultadoBusqueda = tablaEstu.filter((elemento) =>{
    if(elemento.NombreEstudiante.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
     || elemento.Empresa.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ){
      return elemento;
    }

  });
  setEstudiant(resultadoBusqueda);
}

//usamos useEffect para hacer una funcion asincrona....
useEffect(() => {
  getAllEstudents();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
 //hacemos una funcion donde se hara la consulta
  const getAllEstudents = async() => {
    const respuesta = await axios.get(`${endpoint}/kodigo`)
    setEstudiant(respuesta.data);
    setTablaEstu(respuesta.data);
   
    }

  const borrarEstudiantes = async (id) =>{
  await axios.delete(`${endpoint}/kodigo/${id}`)
  getAllEstudents()
  }

return (
       
<body className='bo'>
<div className='buscador'>
      <div class="input-group mb-3" id='inpu-conta'>
      <span class="input-group-text" id="basic-addon1"><span class="material-icons">
      <span class="material-icons" id='ico'>person_search</span></span></span>
      <input type="text" value={busqueda} class="form-control" placeholder="Buscar Alumno......" aria-label="Example text with button addon" id='inpu' aria-describedby="button-addon1" onChange={busquedaCambio}/>
      </div>
</div>
{estudiant.map((estudiante)=>(
  <>
  <div key={estudiante.id}>
      <div class="btn btn-primary" data-bs-toggle="collapse" href={`#n${estudiante.id}`} role="button" aria-expanded="false" aria-controls="collapse" id="bot" data-collapsible="accordion">
      <span class="material-symbols-outlined">
account_circle
</span>  {estudiante.NombreEstudiante}
      <div className="bootcamp">BootCamp : {estudiante.BootCamps}</div>
     </div>
     
     <div class="collapse" id={`n${estudiante.id}`}>

     <div class="card card-body">
     <div class="card">
     <ul class="list-group list-group-flush">
     <li class="list-group-item"> 
     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">Actualizar</button>
     <button type="button" onClick={() => borrarEstudiantes(estudiante.id)} class="btn btn-danger" id='act'>Eliminar</button>
     </li>
       <li class="list-group-item"><h5>Nombre Empresa</h5><h6>{estudiante.Empresa}</h6></li>
       <li class="list-group-item"><h5>Fecha De Inicio</h5><h6>{estudiante.FechaInicio}</h6></li>
       <li class="list-group-item"><h5>Fecha De Final</h5><h6>{estudiante.FechaFinal}</h6></li>
        <li class="list-group-item"><h5>Fecha De Cobro Fee</h5><h6>{estudiante.FechaFinal}</h6></li>
    </ul>
    </div>
     <div class="card-footer">
     <h5>Cantidad a Cancelar </h5><h6>$ {estudiante.MontoCobrar}</h6>
     </div>
   </div>
      
     </div>
   </div>
  
   </>   
      ))}

  <div>
  <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>

  </div>

  
</body>

    )
}

export default Estudiantes;
