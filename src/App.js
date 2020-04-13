import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import './App.css';
import Main from './Component/Main';
import { Link } from 'react-router-dom';

class App extends Component {
  render () {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Conóceme" scroll>
            <Navigation>
                <Link to="/resume">Currículum</Link>
                <Link to="/aboutme">Sobre mi</Link>
                <Link to="/projects">Mis Proyectos</Link>
                <Link to="/contact">Contáctame</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/resume">Currículum</Link>
                <Link to="/aboutme">Sobre mi</Link>
                <Link to="/projects">Mis Proyectos</Link>
                <Link to="/contact">Contáctame</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}
}
export default App;
