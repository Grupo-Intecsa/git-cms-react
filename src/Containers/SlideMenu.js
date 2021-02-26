import React, { Fragment } from 'react'
import { Link } from  'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faAddressCard, faBoxOpen, faPhone } from '@fortawesome/free-solid-svg-icons'

const SlideMenu = ({ modal }) => {

    const { slide, setSlide } = modal
    const toogle = () =>  setSlide(!slide)

    const backdrop = (e) => {
        if(e.target.classList.value === 'backdrop'){
            toogle()
        }
    }


    return(
        <Fragment>
        { slide && (
        <div id="MenuSlide" onClick={backdrop} className="backdrop">
            <div className="menu-slide" >
                <ul>
                    <li>
                        <Link 
                            to="/empresas" 
                            className="btn btn-hover"
                            onClick={toogle}
                            >
                            <p className="nav--item"><FontAwesomeIcon className="slide-icon" icon={faBuilding}/>{" "}Empresas</p>
                        </Link>
                    </li>
                    
                    <li>
                        <Link 
                            to="about" 
                            className="btn btn-hover ms-1"
                            onClick={toogle}
                            >
                            <p className="nav--item"><FontAwesomeIcon className="slide-icon" icon={faAddressCard}/>{" "}¿Quiénes Somos?</p>
                        </Link>
                    </li>

                    <li>
                        <Link 
                            to="/" 
                            className="btn btn-hover ms-1"
                            onClick={toogle}
                            >
                            <p className="nav--item"><FontAwesomeIcon className="slide-icon" icon={faBoxOpen}/>{" "}Productos y Servicios</p>
                        </Link>
                    </li>

                    <li>
                        <Link 
                            to="/contacto" 
                            className="btn btn-hover ms-1"
                            onClick={toogle}
                            >                     
                            <p className="nav--item"><FontAwesomeIcon className="slide-icon" icon={faPhone}/>{" "}Contacto</p>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>)
        
        }
        </Fragment>
    )
}

export default SlideMenu