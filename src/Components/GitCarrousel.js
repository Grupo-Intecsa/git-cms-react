import React, { Component } from 'react';
import { Fragment } from 'react';
import Carousel from 'react-elastic-carousel';

class GitCarrousel extends Component {
    state = {
        brakePoints: [
            { width: 1, itemsToShow: 1, itemsToScroll: 1, pagination: false },
            { width: 550, itemsToShow: 1, itemsToScroll: 1, pagination: false },
            { width: 850, itemsToShow: 2,  itemsToScroll: 1 },
            // { width: 1450, itemsToShow: 5 },
            // { width: 1750, itemsToShow: 6 },
        ],
        data: this.data,
        
    }
    render () {
        const { brakePoints } = this.state;
        const { slide } = this.props
        // TODO hacer que se repita indefinidamente al acabar la lista hay que pasar el iterador al padre
        // console.log(iterador, myLength )
    return (
        <Fragment>
        <Carousel 
            enableAutoPlay={true} 
            breakPoints={brakePoints}
            itemPadding={[10, 10]}
        >
        {slide.map(({ object }) => object.map(item => (
            <div>
            <img src={item.img} alt={item.title} className="img-fluid" />
            <p className="custom--carousel--item">{item.title}</p>
        </div>
        ))
            
        )}
        </Carousel>
        </Fragment>
    )
    }
}

export default GitCarrousel