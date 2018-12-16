import React, { Component } from 'react';
import { Layout } from 'antd';
import Navbar from './components/layout/Navbar';
import Dashborder from './components/dashborder/Dashborder';
import FooterComponent from './components/layout/Footer';
import DetailComponent from './components/detailcourse/detail';

import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';


const {Content} = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Layout >
          <Navbar />
          <Content style={{marginTop:'64px'}}>
          <Route path="/" exact  component ={Dashborder} />
          <Route path='/signin' component = {SignIn} />
          <Route path='/login' component = {SignUp} />
          <Route path='/detail' component ={DetailComponent} />
          </Content>
          <FooterComponent />
        </Layout>
      </Router>
    );
  }
}

export default App;
