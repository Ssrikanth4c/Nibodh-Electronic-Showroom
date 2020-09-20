import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './common/navbar';
import Routes from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
