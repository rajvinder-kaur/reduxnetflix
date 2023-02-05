import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../SassFiles/Signin.sass';
import Navbar from '../components/Navbar'
import { app } from '../firebase-config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signin() {
  const navigate = useNavigate();
  const authentication = getAuth();

  const [email, getE] = useState("")
  const [password, getP] = useState("")


  const handle = (e) => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        navigate('/main')
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      })
      .catch((error) => {
        if(error.code === 'auth/wrong-password'){
          toast.error('Please check the Password');
        }
        if(error.code === 'auth/user-not-found'){
          toast.error('Please check the Email');}
      })
      e.preventDefault()
  }

  return (
    <div className='signin' >
      <Navbar title="signin" />
      <div className="sign">

        <form >
          <h1>Sign In</h1>
          <input type="email" name="" onChange={(e) => { getE(e.target.value) }} id="email" placeholder='Your Email' />
          <input type="password" name="" onChange={(e) => { getP(e.target.value) }} id="password" placeholder='Password' />
          <button onClick={handle} >Sign in </button>
          <p>New to Netflix? <Link to="/">Sign Up now</Link></p>
        </form>
      </div>
      <ToastContainer /> 
    </div>
  )
}

export default Signin