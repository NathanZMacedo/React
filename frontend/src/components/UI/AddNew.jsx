import React,{useState} from 'react'
import './AddNew.css'

function AddNew() {
    const [mouse, setMouse]= useState(true)
  return (
    <div 
    onMouseLeave={()=>setMouse(true)} 
    onMouseEnter={()=>setMouse(false)}
    className={`${mouse ? 'addNewButton' : 'addNewButton-mouse' }`}
    >
        {mouse ? "+" : "Adicionar uma anotação"}
    </div>
  )
}

export default AddNew