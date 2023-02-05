import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Log';
import Main from './pages/Main';
import Page from './pages/Page';

function App() {
 


  return (
    < BrowserRouter>
      <Page />
    </BrowserRouter>
  );
}

export default App;
