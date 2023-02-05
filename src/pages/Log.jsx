import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../SassFiles/login.sass';
import Signup from './Signin';

function Log() {
  return (
    <div className="login">
      <div className="container">
        <Navbar title="Log"/>
      </div>
      <div className="gradient"></div>
      <div className="form">
        <h1>Unlimited films,TV programmes and more </h1>
        <h2>Watch anywhere. Cancel at anytime</h2>
        <p>Ready to watch? Enter your email to create or restart your membership</p>
        <form action="">
          <button className="submit">
             <Link to="/register">GET STARTED</Link>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Log