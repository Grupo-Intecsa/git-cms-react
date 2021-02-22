import React from 'react'


const Contact = () => {
    return(
        <div className="container-fluid">
            <h2 className="title-contacto p-5 mt-5">¿Necesitas más Información?</h2>
            <div className="iframe-monday">
            <iframe 
                title="mondayfrom" 
                src="https://forms.monday.com/forms/embed/608067760034e1ac1f86e10392668e8b?r=use1" 
                width="100%" height="100%" 
                style={{"border": "0", "box-shadow": "5px 5px 56px 0px rgba(0,0,0,0.25)"}}></iframe>
            </div>
        </div>
    )
}

export default Contact