import React from 'react';
import { ModalBody } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";

const endpoint = "http://127.0.0.1:8000/api";

const ModalEliminar = ({modal, setModal, id, setRefresh}) => {

    const borrarEstudiantes = async () => {
        await axios.delete(`${endpoint}/kodigo/${id}`)
        .then(response => {
          if(response.status === 200){
            toast.dark("Se Elimino Correctamente !", {
              position: toast.POSITION.TOP_LEFT,
            });
            setRefresh(true);
            setModal(false);
          }else{
            toast.error("No Elimino Vuelva a intentarlo...", {
              position: toast.POSITION.TOP_LEFT
              // className: 'alertSuccess'
            });
          }
        })
        .catch(error => {
          toast.error("No Elimino Vuelva a intentarlo...", {
            position: toast.POSITION.TOP_LEFT
          });
        })
      };

  return (
    <Modal show={modal} onHide={()=>setModal(false)}>
        <Modal.Header>
            ¿Deseas Eliminar este Estudiante? El Estudiante Se Eliminara permanentemente......
        </Modal.Header>
        <Modal.Body>
          <div className='text-center'>
            <button id="boto-m" onClick={()=>setModal(false)}>Cancelar</button>
            <button id="boto-m" onClick={borrarEstudiantes}>Eliminar</button>
          </div>
        </Modal.Body>
    </Modal>
  )
}

export default ModalEliminar;