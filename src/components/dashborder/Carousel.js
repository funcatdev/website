import React, { Component } from 'react';
import { Carousel,Layout } from 'antd';
const { Content } = Layout;
export default class CarouselComponet extends Component {
    render() {
        return (
            
            <Carousel autoplay={false} dots={false}>
                <div className="caroiselpng"><h3>1</h3></div>
            </Carousel>
        
        )
    }
}

