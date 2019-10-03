import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';

export default class App extends Component {
  static displayName = App.name;
  state = {
    projects: []
  }

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={About} />
        
      </Layout>
    );
  }
}
