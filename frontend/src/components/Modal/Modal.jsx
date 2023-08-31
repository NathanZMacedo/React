import React from 'react'
import './Modal.css'
import {AiFillCloseCircle} from 'react-icons/ai'

function Modal(props) {
  
  return (
    <div className='fundo'>
      <div className='X' onClick={()=>props.fecharOModal()}>
        <AiFillCloseCircle size={25} color='white'/>
      </div>
        <div>
          <form action="" className="form">

            <label htmlFor="title">Titulo</label>
            <input type="text" placeholder='Titulo da anotação' name='title' id='title'/>

            <label htmlFor="description">Descrição</label>
            <input type="text" placeholder='Descrição da anotação' name='title' id='title'/>
            <button>Confirmar Anotação</button>
          </form>
        </div>
    </div>
  )
}

export default Modal