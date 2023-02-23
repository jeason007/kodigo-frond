
import React,{useState} from 'react';
import { redirect, useNavigate } from "react-router-dom";
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/kodigo'

const Cabeza = () => {

    const [NombreEstudiante, setNombreEstudiante] = useState('');
    const [BootCamps, setBootCamps] = useState('');
    const [Empresa, setEmpresa] = useState('');
    const [FechaInicio, setFechaInicio] = useState('');
    const [FechaFinal, setFechaFinal] = useState('');
    const [CobroFee, setCobroFee] = useState('');
    const [MontoCobrar, setMontoCobrar] = useState('');
    const navigate = useNavigate()
    
   
    
     
    const store = async (e) => {
      e.preventDefault();
  try{ await axios.post(endpoint, {NombreEstudiante: NombreEstudiante,
          BootCamps: BootCamps,
          Empresa: Empresa,
          FechaInicio: FechaInicio ,
          FechaFinal: FechaFinal,
          CobroFee:CobroFee ,
          MontoCobrar: MontoCobrar
            })
            
         redirect("/");
        }
       
        catch(err){
          console.log(err);
        }
    }
    return (
        <div className="header">
        <h3 className="kodigo">Kodigo Empleabilidad Panel</h3>
        <div className="logo"></div>
        <div className="boton">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">ingresar</button>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" id='modal-dialog'>
      <div class="modal-content">
      <div class="modal-header" id='header-modal'>
      <h1 class="modal-title fs-5" id="exampleModalLabel">Informacion Estudiante</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form onSubmit={store}>
      <div class="input-group flex-nowrap">
      <input type="text"  value={NombreEstudiante} onChange={(e)=> setNombreEstudiante(e.target.value)} class="form-control" placeholder="Nombre Del Estudiante" aria-label="Username" aria-describedby="addon-wrapping"/>
      </div><br/>
      <div class="input-group flex-nowrap">
      <input type="text" value={BootCamps} onChange={(e)=> setBootCamps(e.target.value)} class="form-control" placeholder="BootCamps" aria-label="Username" aria-describedby="addon-wrapping"/>
      </div><br/>
      <div class="input-group flex-nowrap">
      <input type="text" value={Empresa} onChange={(e)=> setEmpresa(e.target.value)} class="form-control" placeholder="Empresa Contratada" aria-label="Username" aria-describedby="addon-wrapping"/>
      </div><br/>
      <div className="center"><h6>Fecha Inicio :</h6></div>
      <div class="input-group flex-nowrap">
      <input type="date" value={FechaInicio} onChange={(e)=> setFechaInicio(e.target.value)} class="form-control" placeholder="Fecha de inicio"  aria-describedby="addon-wrapping"/>
      </div><br/>
      <div className="center"><h6>Fecha Final :</h6></div>
      <div class="input-group flex-nowrap">
      <input type="date" value={FechaFinal} onChange={(e)=> setFechaFinal(e.target.value)} class="form-control" placeholder="Fecha De Final"  aria-describedby="addon-wrapping"/>
      </div><br/>
      <div className="center"><h6>Fecha De Cobro Fee :</h6></div>
      <div class="input-group flex-nowrap">
      <input type="date" value={CobroFee} onChange={(e)=> setCobroFee(e.target.value)} class="form-control" placeholder="Fecha Cobro Fee"  aria-describedby="addon-wrapping"/>
      </div><br/>
      <div class="input-group flex-nowrap">
      <input type="text" value={MontoCobrar} onChange={(e)=> setMontoCobrar(e.target.value)} class="form-control" placeholder="Monto adeudado"  aria-describedby="addon-wrapping"/>
      </div><br/>
      <div class="modal-footer" >
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type='submit'   class="btn btn-primary">Guardar</button>
      </div>
      </form>
      </div>
      
    </div>
  </div>
</div>
</div>
        
    )
}

export default Cabeza;

