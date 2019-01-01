import React from 'react'

import {  Layout,Row,Col } from "antd";
import SectionTitleComponet from './SectionTitle';
import image1 from '../../assets/indexpage/0.3.1.png'
import image2 from '../../assets/indexpage/0.4.1.png'
import image3 from '../../assets/indexpage/0.5.1.png'
import image4 from '../../assets/indexpage/0.6.1.png'

const { Content } = Layout;


export default ()=>(
    <Content className ='section'>
        <SectionTitleComponet subtitle="Course Advantage" title="课程优势" />
        <Row gutter={24} type="flex" justify="center" >
            <Col className="slide-content" md={4} sm={12} >
                <div className="lasy-image-load">
                    <img src={image1} />
                </div>
                <h5>小班教学</h5> 
                <h5>一一辅导</h5>
            </Col>
            <Col className="slide-content" md={4} sm={12}>
            <div className="lasy-image-load">
                <img src={image2} />
            </div>
                <h5>线上线下授课结合</h5> 
                <h5>24小时答疑</h5>
            </Col>
            <Col className="slide-content" md={4} sm={12}>
            <div className="lasy-image-load">
                <img src={image3} />
            </div>
                <h5>项目实战</h5> 
                <h5>系统学习</h5>
            </Col>
            <Col  className="slide-content"  md={4} sm={12}>
            <div className="lasy-image-load">
                <img src={image4} />
            </div>
                <h5>简历优化</h5> 
                <h5>就业辅导</h5>
            </Col>
            <Col className="slide-content" md={4} sm={12}>
            <div className="lasy-image-load">
                <img src={image4} />
            </div>
                <h5>企业内推</h5> 
                <h5>职场圈构建</h5>
            </Col>
        </Row>
    </Content>
);