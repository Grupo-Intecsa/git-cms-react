import React, { Fragment, lazy, useMemo, useState } from 'react'

import slide from '../data/data.json'
const { Carrousel } = slide

const Empresas = lazy(() => import('../Components/Empresas.js'))
const GitCarrousel = lazy(() => import('../Components/GitCarrousel.js'))

const Landing = () => {

    const [ iterador, setIterador ] = useState(1)
    
    const handlePushClic = () => {
        if(iterador === 5 ){
            setIterador(0)
        }
        setIterador(iterador => iterador + 1)
    }

    const handledMinusClic = () => {
        if(iterador === 1 ){
            setIterador(5)
        }
        setIterador(iterador => iterador - 1 )
    }

    const currentSlide = useMemo(() => {
        let objectSlide = [

            { "id": 1, "object": Carrousel.Obra, "title": "Instalaciones Eléctricas" },
            { "id": 2, "object": Carrousel.Productos, "title": "Venta de Productos" },
            { "id": 3, "object": Carrousel.Tableros, "title": "Integración de Tableros" },
            { "id": 4, "object": Carrousel.Trasportes, "title": "Provisionales, Gruas, Plantas de energía"},
            { "id": 5, "object": Carrousel.Canalizacion, "title": "Canalización Eléctrica" }
        
        ]
        const value = objectSlide.filter((item)=> item.id === iterador )

        const myLength = value.map(({ object }) => object.length )
        return { slide: value, myLength: Number(myLength) }

    }, [ iterador ])

    console.log(currentSlide)

    return(
        <Fragment>
            <div className="row">
                <div className="col-12">
                    <Empresas />
                </div>

            </div>
            <div id="Productos">
            <div>
                        <h2 className="title--master">Nuestros Productos y Sercvicios</h2>
                        <hr />
                        <div className="custom--carousel-title">
                            <button className="btn--carousel--select" onClick={handledMinusClic}>
                            <i class="fas fa-arrow-alt-circle-left"></i>
                            </button>                    
            
                            <div>{currentSlide.slide.map(item => item.title )}</div>
            
                            <button className="btn--carousel--select" onClick={handlePushClic}>
                                <i class="fas fa-arrow-alt-circle-right"></i>
                            </button>
                        </div>
                        
                    </div>
                <div className="col-12 mb-0">
                    <GitCarrousel slide={ currentSlide.slide } />
                </div>
            </div>
                <a href="https://practical-turing-793a2f.netlify.app/" target="_blank" className="txtd-none" rel="noreferrer">
                    <p className="card-button mt-0">Conozca nuestro catálogo de productos en línea.</p>
                </a>
        </Fragment>
    )
}


export default Landing