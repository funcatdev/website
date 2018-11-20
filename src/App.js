import React, { Component } from 'react';
import { Layout } from 'antd';
import Navbar from './components/layout/Navbar';
import Dashborder from './components/dashborder/Dashborder';
import FooterComponent from './components/layout/Footer';



class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Navbar />
        <Dashborder />
        <FooterComponent />
      </Layout>
    );
  }
}

export default App;
