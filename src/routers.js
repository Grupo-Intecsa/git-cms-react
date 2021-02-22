import React from 'react'

const Landing = React.lazy(() => import('./View/Landing'))
const Empresa = React.lazy(() => import('./View/Empresa'))
const Contact = React.lazy(() => import('./View/Contact'))
const About = React.lazy(() => import('./View/About'))

const Empresas = React.lazy(() => import('./Components/Empresas'))



const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: "/landing", name: "Landing", component: Landing },
    { path: "/empresa/:slug", name: "Empresa", component: Empresa, exact: false },
    { path: "/contacto", name: "Contacto", component: Contact, exact: false },
    { path: "/empresas", name: "Empresas", component: Empresas, exact: false },
    { path: "/about", name: "Empresas", component: About, exact: false },


    
]

export default routes
