import React, { useState, useEffect } from "react";
//import axios from "axios";
import ModalStore from "./ModalStore";
import { toast, ToastContainer } from 'react-toastify';


const Headboard = ({refresh, setRefresh}) => {
  
  const [modalStore, setModalStore] = useState(false);

  const [alert, setAlert] = useState(false);

  const mostrarAlert = () => {
    if(alert){
      toast.dark("Se agrego Corectamente !", {
        position: toast.POSITION.TOP_LEFT,
        className: 'alertSuccess'
      });
      setAlert(false)
    }
  }

  useEffect(() => {
    mostrarAlert();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alert]);

  return (
    <div className="header">
      <h3 className="kodigo">Kodigo Empleabilidad Panel</h3>
      <div className="logo"></div>
      {/*<p onClick={()=>{setRefresh(true)}}  id="boton-refresh"><span class="material-symbols-outlined">autorenew</span></p>*/}
      <div className="boton">
        <button onClick={()=>{setModalStore(true)}} type="button" className="btn"id="boto-m">Ingresar</button>
        <a href="http://localhost:8000/api/excel"  type="button" className="btn" id="boto-m">Exportar</a>
        
      </div>
      
      <ModalStore modal={modalStore} setModal={setModalStore} setRefresh={setRefresh} setAlert={setAlert}/>
      <ToastContainer />
      
    </div>
  );
};

export default Headboard
