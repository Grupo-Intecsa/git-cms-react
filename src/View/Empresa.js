import React, { Fragment, useMemo, lazy } from 'react'
import { EmpresasJson } from '../data/data.json'


const GitCard = lazy(() => import('../Components/GitCard.js'))

const Empresa = ({ match }) => {

    const { slug } = match.params

    const currentEmpresa = useMemo(() => {
        return EmpresasJson.filter(empresa => empresa.slug === slug )
    },[slug])


    return(
        <Fragment>
        <div className="d-flex justify-content-center p-3">
            {currentEmpresa ?
                currentEmpresa.map((item, index ) => (
                    <div key={`${item.slug}${index}`}>

                        <h2 className="title--master-blue">{item.title}</h2>

                        <div className="d-flex justify-content-center col-12">
                            <div className="col-6">
                                <p>{item.text}</p>
                            </div>
                                <img src={`../${item.logo}`} alt={item.title} height={87} className="logo--background mb-5 ms-2"/>        
                            
                        </div>
            {/* tarjetas */}
                        <div className="card-container"> 
                            {item.card.map(card => <GitCard key={card.slug} props={ card } />)}                        
                        </div>
            {/* slides */}
                        
                    </div>
                ))
            : <p>Loading...</p>
            }
        </div>
        
        </Fragment>
    )
}

export default Empresa