import React from 'react'



const TheFooter = ({ data }) => {
    return (
        <div id="footer">
        <div className="footer--container">
        <div className="footer--map">
            <div>
            <div>
                <h2>Encuentranos</h2>
                <hr />
            </div>
            <div className="map">
            <iframe title="myMapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5322.527002406184!2d-99.22696839255828!3d19.38668419189787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201adefab9513%3A0xa5936acc13a69c0d!2sRa%C3%BAl%20Z%C3%A1rate%20Machuca%2011%2C%20Cuevitas%2C%20%C3%81lvaro%20Obreg%C3%B3n%2C%2001220%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1613650539398!5m2!1ses!2smx" frameBorder="0" style={{ "border": "0" }} allowFullScreen="" aria-hidden="false" tabIndex="0" width="100%" height="100%"  ></iframe>
            </div>
            </div>
        </div>
        <div className="footer--info--contacto">
            <div className="contact-item">
            <h3 className="title--master">Información de Contacto</h3>
            <p>
                <span>
                <i className="fa fa-map-marker"></i> Dirección
                </span>
                <div className="w-100 pb-1" /> 
                {data ? data.address : "loading"}
            </p>
            </div>
            <div className="contact-item">
            <p>
                <span>
                <i className="fa fa-phone"></i> Teléfono
                </span>
                <div className="w-100 pb-1" /> 
                {data ? data.phone : "loading"}
            </p>
            </div>
            <div className="contact-item">
            <p>
                <span>
                <i className="fa fa-phone"></i> Teléfono
                </span>
                <div className="w-100 pb-1" /> 
                {data ? data.phone2 : "loading"}
            </p>
            </div>
            <div className="">
            <p>
                <span>
                <i className="fa fa-envelope"></i> Email
                </span>
                <div className="w-100 pb-1" /> 
                {data ? data.email : "loading"}
            </p>
            <p>
                <span>
                <i className="fa fa-envelope"></i> Email
                </span>
                <div className="w-100 pb-1" /> 
                {data ? data.email2 : "loading"}
            </p>
            </div>
        </div>
        </div>
        <div className="footer--social">
            <div className="row">
            <div className="social">
                <ul>
                <li>
                    <a
                    href={data ? data.facebook : "/"}
                    >
                    <i className="fas fa-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a href={data ? data.youtube : "/"}>
                    <i className=" fas fa fa-youtube"></i>
                    </a>
                </li>
                </ul>
            </div>
            <div className="text-center">
                <p>
                    &copy; 2021 Carlos Chávez React Template / GRUPO INTECSA es una marca Registrada
                </p>
            </div>
            </div>
        </div>

        </div>
    
    )
}

export default TheFooter
