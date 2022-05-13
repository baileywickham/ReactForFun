import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Login} from './Login'
import {Inst} from './Inst'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  //<React.StrictMode>
    <Router>
      <Routes>
          <Route exact path='/' element={<App />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/instructions' element={<Inst/>} />
      </Routes>
    </Router>,
  //</React.StrictMode>,
  document.getElementById('root')
);