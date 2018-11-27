import React, { Component } from 'react';
import { Carousel,Layout } from 'antd';
const { Content } = Layout;
export default class CarouselComponet extends Component {
    render() {
        return (
            <Content style={{marginTop:'3px'}}>
            <Carousel autoplay>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
            </Content>
        )
    }
}

