import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { EmpresasJson } from '../data/data.json'


const Empresas = () => {
    return(
    <Fragment>
        <div id="Empresas" className="text-center features--animation">
        <div className="container">
            <div>
            <h2 className="title--master-black">EMPRESAS</h2>
            <hr />
            </div>
            <div className="content-empresa">
            {EmpresasJson
                ? EmpresasJson.map((d,i) => (
                    <Link key={`${d.title}-${i}`} to={`/empresa/${d.slug}`} className="btn" >
                    <div className="col-xs-6 col-md-3" style={{ "width": "100%" }}>
                    {" "}
                    <img src={d.logo} alt="foto de icono" height={87} className="logo--background mb-5" />
                    <h3 className="title-empresas">{d.title}</h3>
                    <hr/>
                    <p className="d-none d-sm-block">{d.text}</p>
                    <p className="d-block d-sm-none btn btn-outline-danger">leer más...</p>
                    <ul>
                        {d?.list && (
                            d.list.map(item => <li>{item}</li>)
                        )}
                    </ul>
                    </div>
                    </Link>
                ))
                : "Loading..."}
            </div>
            
        </div>
        </div>
    </Fragment>
    )
}

export default Empresas