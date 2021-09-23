import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Code from './containers/Code';
import Cuestionario from './containers/Cuestionario';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/code" exact component={Code} />
      <Route path="/cuestionario" exact component={Cuestionario} />
    </Router>
  );
}

export default App;
