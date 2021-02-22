import React from 'react'
import { Link } from 'react-router-dom'

const TheHeader = ({ data }) => {

    const { title, paragraph } = data 

    return (
    <div>
    <nav className="navbar navbar-light bg-silver custom--navbar">
    <div className="container-fluid d-flex justify-content-center justify-content-between">
    <a className="navbar-brand ms-2" href="/">
    {/* <img src="img/logo/icoGIT.svg" alt="" width="30" height="24" className="d-inline-block align-top" /> */}
        <span className="custom--navbar--title col-4">{title}</span>
    </a>
    {/*  */}
    <div className="col-8 d-none d-md-block">
        
        
        <Link to="/empresas" className="btn btn-hover">Empresas</Link>
        <Link to="about" className="btn btn-hover ms-1">¿Quiénes Somos?</Link>
        <Link to="/" className="btn btn-hover ms-1">Productos y Servicios</Link>
        <Link to="/contacto" className="btn btn-hover ms-1">Contacto</Link>

    </div>
    </div>
    </nav>
    <div id="header" className="intro-text">
        <h1 className="linear-wipe">{title}</h1>
        <p>{paragraph}</p>
        <a href="https://practical-turing-793a2f.netlify.app/" target="_blanck"  className="btn"><p className="btn-custom">Nuestros Productos</p></a>
    </div>
    </div>

    )
}

export default TheHeader
