import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import Navbar from '../components/Navbar'
import Homesecreen from './Homescreen'


function Main() {
  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    navigate('/login')
}
let navigate = useNavigate();

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
      <Navbar title="Home" fun={handleLogout} />
      <Homesecreen/>
    </div>
  )
}

export default Main
