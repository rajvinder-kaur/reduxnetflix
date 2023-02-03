import React, { useState } from 'react';
import '../SassFiles/login.sass';
import Signup from './Signin';


function Login() {
    const[x,set]=useState(false);
  return (
    
 

    <div className="login"
     
    >
       <div className="container">
       <div className="lgo">
        <img src="https://andrewjamesspooner.com/wp-content/uploads/2019/06/netflix-logo-e1536243210766-1024x284.png" alt="logo" width="100%" />
        </div>
        <div className="signin" >
            <button>
                Sign In 
            </button>
        </div>
       </div>
       <div className="gradient"></div>
       {x?(
        <Signup/>
       ):(
         <div className="form">
         <h1>Unlimited films,TV programmes and more </h1>
         <h2>Watch anywhere. Cancel at anytime</h2>
         <p>Ready to watch? Enter your email to create or restart your membership</p>
         <form action="">
             <input type="email" name="" id="" />
             <button className="submit" 
             onClick={
                ()=>set(true)
            }>GET STARTED</button>
         </form>
         </div>
       )}
    </div>
  )
}

export default Login