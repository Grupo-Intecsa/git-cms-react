import React from 'react'
import {
    Content,
    TheFooter,
    TheHeader
} from './index'

import data from '../data/landing.json'
import infoJSON from '../data/data.json'


const TheLayout = (props) =>{
    return(
        <div className="c-app c-default-layout">

            <div className="c-wrapper">
                <TheHeader data={data.Header} />

                <div className="c-body">
                <Content {...props} />
                </div>

                <TheFooter data={infoJSON.Footer}  />
            </div>
        </div>
    )
}

export default TheLayout