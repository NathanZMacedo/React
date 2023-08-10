import React from 'react'
import { Link } from 'react-router-dom'
import "./ErrorPage.css"
function ErrorPage() {
  return (
    <div id="errorPage">
        <h1>Esta pagina não existe</h1>
        <h2>ERROR 404</h2>
        <h6><Link to='/'>Voltar a pagina inicial</Link></h6>
    </div>
  )
}

export default ErrorPage