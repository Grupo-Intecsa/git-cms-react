import React from 'react'
import { Fragment } from 'react'


const GitCard = ({ props }) => {

    const { img, title, content } = props
    console.log(props)
    
    return(
    <Fragment>
        
            <div className="item">
                <img alt="imagen produccion" src={`../${img}`} className="img-fluid" radioGroup={4} />
                <h2 className="mt3 text-card-title" style={{ color: "black"}}>{title}</h2>
                <hr />
                <p className="card--body" style={{ color: "black"}}>
                    {content}
                </p>
            </div>
        
    </Fragment>
    )
}

export default GitCard