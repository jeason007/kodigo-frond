import React, { useState } from "react";
//import axios from "axios";
import ModalStore from "./ModalStore";


const Headboard = ({refresh, setRefresh}) => {
  
  const [modalStore, setModalStore] = useState(false);

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
      
      <ModalStore modal={modalStore} setModal={setModalStore} setRefresh={setRefresh}/>
      
    </div>
  );
};

export default Headboard
