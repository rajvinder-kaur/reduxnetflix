import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../SassFiles/Signin.sass';
import Navbar from '../components/Navbar'
import { app } from '../firebase-config';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const navigate = useNavigate()
    const [email, getE] = useState("")
    const [password, getP] = useState("")


    const handle = (e) => {
        const authentication = getAuth();
        createUserWithEmailAndPassword(authentication, email, password)
            .then((response) => {
                console.log(response)
                navigate('/main')
                sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
            })
        .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
              toast.error('Email Already in Use');
            }
          })
          console.log("User  Authenticated !")
          e.preventDefault()
    }



    return (
        <div className='signin' >
            <Navbar title="signin" />
            <div className="sign">

                <form >
                    <h1>Register</h1>
                    <input type="email" name="" onChange={(e) => { getE(e.target.value) }} id="email" placeholder='Your Email' />
                    <input type="password" name="" onChange={(e) => { getP(e.target.value) }} id="password" placeholder='Password' />
                    {/* <button><Link to="/Main" >Sign In</Link></button> */}
                    <button onClick={handle} >Ready to go</button>
                </form>
            </div>
            <ToastContainer /> 
        </div>
    )
}

export default Register
