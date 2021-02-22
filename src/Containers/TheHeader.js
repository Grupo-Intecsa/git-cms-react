import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo/git_logo.svg'

const TheHeader = ({ data }) => {

    const { title, paragraph } = data 

    return (
    <div>
    <nav className="navbar navbar-light bg-silver custom--navbar">
    <div className="container-fluid d-flex justify-content-center justify-content-arround">
    <a className="navbar-brand ms-2" href="/">
    <img src={logo} alt="" className="d-inline-block align-top logo-nav"/>
        {/* <span className="custom--navbar--title col-4">{title}</span> */}
    </a>
    {/*  */}
    <div className="col-8 d-none d-lg-block nav--item">
        
        
        <Link to="/empresas" className="btn btn-hover"><p className="nav--item">Empresas</p></Link>
        <Link to="about" className="btn btn-hover ms-1"><p className="nav--item">¿Quiénes Somos?</p></Link>
        <Link to="/" className="btn btn-hover ms-1"><p className="nav--item">Productos y Servicios</p></Link>
        <Link to="/contacto" className="btn btn-hover ms-1"><p className="nav--item">Contacto</p></Link>

    </div>
    </div>
    </nav>
    <div id="header" className="intro-text">
        <h1 className="linear-wipe text-effect">Grupo</h1>
        <div className="w-100"></div>
        <h1 className="linear-wipe mb-3">Intecsa</h1>
        <p className="p-3" >{paragraph}</p>
        <a href="https://practical-turing-793a2f.netlify.app/" target="_blanck"  className="btn"><p className="btn-custom">Nuestros Productos</p></a>
    </div>
    </div>

    )
}

export default TheHeader
