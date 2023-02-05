import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import Navbar from '../components/Navbar'
import Homesecreen from './Homescreen'


function Main() {
  const navigate =  useNavigate();

  useEffect(()=>{
    let authToken = sessionStorage.getItem('Auth Token')
    if(authToken){
        navigate("/Main")
    }
    if(!authToken){
        navigate("/register")
    }
})

  return (
    <div>
      <Navbar title="Home" />
      <Homesecreen/>
    </div>
  )
}

export default Main
