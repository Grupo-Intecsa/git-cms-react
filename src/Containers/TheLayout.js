import React, { useState } from 'react'
import {
    Content,
    TheFooter,
    TheHeader,
    SlideMenu
} from './index'

import data from '../data/landing.json'
import infoJSON from '../data/data.json'


const TheLayout = (props) =>{

    const [ slide, setSlide ] = useState(false)
    
    return(
        <div className="c-app c-default-layout">
                <SlideMenu { ...props } modal={{ slide, setSlide }} />
            <div className="c-wrapper">
                <TheHeader data={data.Header} modal={{ slide, setSlide }} />

                <div className="c-body">
                <Content { ...props } />
                </div>

                <TheFooter data={ infoJSON.Footer }  />
            </div>
        </div>
    )
}

export default TheLayout