import React, { Fragment } from 'react';

import { Layout,List,Card, Col, Row} from 'antd';
import CourseAvgComponet from './CourseAvg';
import ConactUsComponet from './ConactUs';
import CarouselComponet from './Carousel';
import CourseSchdule from './Schedule';

import '../../styles/dashborder.css';
import AboutUsComponent from './AboutUs';

const { Content } = Layout
const { Meta } = Card;


const Dashborder = () => {
    return (
        <Fragment>
            <CarouselComponet />
            <CourseSchdule />
            <CourseAvgComponet />
           <AboutUsComponent />
           <ConactUsComponet />
        </Fragment>
    );
}

export default Dashborder;