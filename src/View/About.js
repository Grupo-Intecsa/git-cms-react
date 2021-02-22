import React, { Fragment } from 'react'

import logo from '../assets/about.jpg'

const About = () => {

    // FACTORIZAR ESTE COMPONENTE 

    return(
        <Fragment>
            <div id="About">
            <div>
				<div className="d-flex flex-row flex-wrap-reverse flex-lg-nowrap">
					<div className="d-flex flex-column">
						<h1 className="display-4 mt-5 mt-lg-0">Quiénes somos</h1>
						<p className="lead p-2">
							Instalaciones Tecnológicas Aplicadas S. A. de C. V.
							parte de GRUPO INTECSA, es una empresa dedicada a la
							instalación, planeación, construcción y
							mantenimiento de Centros comerciales y tiendas
							departamentales especializada en proyectos
							electromecánicos cuyos servicios se extienden a todo
							el mercado nacional.
						</p>
					</div>
					<div>
						<img
							src={logo}
							alt="about"
                            className="img-fluid"
						/>
					</div>
				</div>
			</div>
		<div className="container-fluid bg-danger pt-5 pb-5">
			<div className="container text-light">
				<section id="certificaciones">
					<h4 className="display-4">Certificaciones</h4>
					<div
						className="bg-danger d-flex flex-row flex-wrap flex-lg-nowrap"
					>
						<div className="mr-3">
							<img
								src="img/no-imagen_600x280.jpg"
								className="image-cover"
								alt=""
							/>
						</div>
						<div className="d-flex flex-column mr-3">
							<p className="lead">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Accusamus aliquid rerum
								explicabo praesentium sed delectus ab deleniti
								cupiditate, ipsa, quasi quisquam autem aliquam!
								Aliquid odit ducimus suscipit vero quia
								consequuntur.
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>

		<div className="container-fluid bg-light pt-5 pb-5">
			<div className="container">
				<section id="premios">
					<h4 className="display-4">Premios</h4>
					<div
						className="bg-light d-flex flex-row flex-wrap flex-lg-nowrap"
					>
						<div className="d-flex flex-column mr-3">
							<ul>
								<li>
									Premio Empresa Mexica del Año 2012, por
									Latin Amarican Quality Institute.
								</li>
								<li>
									México Quality Certification en el año 2012
									por Latin Amarican Quality Institute.
								</li>
								<li>
									Reconocimiento otorgado por la Asociación
									Internacional de Mercadotecnia, S. C.
								</li>
								<li>
									“Estrella de Oro” Al Mérito Empresarial, en
									mayo del 2005
								</li>
								<li>
									Reconocimiento otorgado por la Asociación
									Internacional de Mercadotecnia, S. C.
								</li>
								<li>
									“Medalla de Oro” a la Calidad y Servicio, en
									junio del 2005.
								</li>
								<li>
									Reconocimiento otorgado por el Trade
									Leaders’ Club, New Millennium Award.
								</li>
								<li>
									Trofeo otorgado por la Editorial Office
									“XXXII Trofeo Internacional al Prestigio
									Comercial”, en noviembre del 2002.
								</li>
								<li>
									Trofeo internacional al prestigio comercial,
									reconocimiento otorgado por el Trade
									Leaders’ Club, New Millennium Award. ​
								</li>
							</ul>
						</div>
						<div>
							<img
								src="img/no-imagen_600x280.jpg"
								className="border border-danger image-cover"
								alt=""
							/>
						</div>
					</div>
				</section>
			</div>
		</div>

		<div className="container-fluid bg-danger pt-5 pb-5">
			<div className="container text-light">
				<section id="premios">
					<h4 className="display-4">Obras más recientes</h4>
					<div
						className="bg-danger d-flex flex-row flex-wrap flex-lg-nowrap"
					>
						<div className="d-flex flex-column mr-3">
							<ul>
								<li>
									Premio Empresa Mexica del Año 2012, por
									Latin Amarican Quality Institute.
								</li>
								<li>
									México Quality Certification en el año 2012
									por Latin Amarican Quality Institute.
								</li>
								<li>
									Reconocimiento otorgado por la Asociación
									Internacional de Mercadotecnia, S. C.
								</li>
								<li>
									“Estrella de Oro” Al Mérito Empresarial, en
									mayo del 2005
								</li>
								<li>
									Reconocimiento otorgado por la Asociación
									Internacional de Mercadotecnia, S. C.
								</li>
								<li>
									“Medalla de Oro” a la Calidad y Servicio, en
									junio del 2005.
								</li>
							</ul>
						</div>
						<div>
							<img
								src="img/no-imagen_600x280.jpg"
								className="border border-danger image-cover"
								alt=""
							/>
						</div>
					</div>
				</section>
			</div>
		</div>
        </div>
        </Fragment>
    )
}


export default About