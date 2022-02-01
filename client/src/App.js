import React from 'react';
import './App.css';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/inedx';
import Home from './components/Home/index';
import About from './components/About/index';
import Tools from './components/Tools/index';


import './App.css';

const App = () => (
  <div>
  <HashRouter>
      <Nav></Nav>
      <div className="content">
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/tools" component={Tools}/>
          </Switch>
      </div>
  </HashRouter>
</div>
);

export default App;
