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
        position: toast.POSITION.TOP_RIGHT,
        className: 'alertSuccess'
      });
      setAlert(false)
    }
  }

  useEffect(() => {
    mostrarAlert();
  }, [alert]);

  return (
    <div className="header">
      <h3 className="kodigo">Kodigo Empleabilidad Panel</h3>
      <div className="logo"></div>
      <div className="boton">
        <button
          onClick={()=>{setModalStore(true)}}
          type="button"
          class="btn"
          id="boto-m"
        >
          ingresar
        </button>
      </div>
      
      <ModalStore modal={modalStore} setModal={setModalStore} setRefresh={setRefresh} setAlert={setAlert}/>
      <ToastContainer />
      
    </div>
  );
};

export default Headboard
