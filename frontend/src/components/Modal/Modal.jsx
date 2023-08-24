import React from 'react'
import './Modal.css'
import {AiFillCloseCircle} from 'react-icons/ai'

function Modal() {
  return (
    <div className='fundo'>
        Modal
        <AiFillCloseCircle width={50} color='white'/>
        <div>
            qualquer coisa 
        </div>
    </div>
  )
}

export default Modal