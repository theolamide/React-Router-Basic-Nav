import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />

    <Route exact path="/" component={Home} /> 
    <Route exact path="/about-page" component={About} />
    <Route exact path="/contact-page" component={Contact} />
  </div>
);

export default App;
