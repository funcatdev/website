import React, { Component } from 'react'
import BannerComponent from './banner';
import CourselistComponent from './courselist';


export default class DetailComponent extends Component {
  render() {
    return (
      <div>
        <BannerComponent/>
        <CourselistComponent />
      </div>
    )
  }
}
