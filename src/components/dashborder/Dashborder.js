import React, { Fragment } from 'react';
import CourseAvgComponet from './CourseAvg';
import ConactUsComponet from './ConactUs';
import CarouselComponet from './Carousel';
import CourseSchdule from './Schedule';
import AboutUsComponent from './AboutUs';

import '../../styles/dashborder.css';

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