import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Page from './pages/Page';
import Login from './pages/Login';


function App() {
  const User = null;
  return (
    < BrowserRouter>
      {!User ? (
        <Login />
      ) : (
        <div>
          <Navbar page="home"/>
          <Page />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
