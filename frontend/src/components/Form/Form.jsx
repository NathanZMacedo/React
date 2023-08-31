import React from 'react'

function Form() {

  return (
    <form action="" className="form">

        <label htmlFor="title">Titulo</label>
        <input type="text" placeholder='Titulo da anotação' name='title' id='title'/>

        <label htmlFor="description">Descrição</label>
        <input type="text" placeholder='Descrição da anotação' name='title' id='title'/>
        <button>Confirmar Anotação</button>
    </form>
  )
}

export default Form