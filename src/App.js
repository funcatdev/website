import React, { Component } from 'react';
import { Layout } from 'antd';
import Navbar from './components/layout/Navbar';
import Dashborder from './components/dashborder/Dashborder';
import FooterComponent from './components/layout/Footer';
import DetailComponent from './components/detailcourse/detail';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout >
          <Navbar />
          <Route path="/" exact  component ={Dashborder} />
          <Route path='/signin' component = {SignIn} />
          <Route path='/login' component = {SignUp} />
          <Route path='/detail' component ={DetailComponent} />
          <FooterComponent />
        </Layout>
      </Router>
    );
  }
}

export default App;
