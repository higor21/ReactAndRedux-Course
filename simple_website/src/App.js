import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import PageWrapper from './components/PageWrapper'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Services from './components/Pages/Services';
import Portfolio from './components/Pages/Portfolio';
import Team from './components/Pages/Team';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <Router>
      <PageWrapper>
        <Route 
          exact={true}
          path="/"
          component={Home}
        />

        <Route 
          path="/about"
          component={About}
        />
        
        <Route 
          path="/services"
          component={Services}
        />
                
        <Route 
          path="/portfolio"
          component={Portfolio}
        />

        <Route 
          path="/team"
          component={Team}
        />

        <Route 
          path="/contact"
          component={Contact}
        />
      </PageWrapper>
    </Router>
  );
}

export default App;
