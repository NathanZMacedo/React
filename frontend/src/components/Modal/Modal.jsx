import React from 'react'
import './Modal.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import Form from '../Form/Form'

function Modal(props) {
  
  return (
    <div className='fundo'>
      <div className='X' onClick={()=>props.fecharOModal()}>
        <AiFillCloseCircle size={25} color='white'/>
      </div>
        <div>
          <Form/>
        </div>
    </div>
  )
}

export default Modal