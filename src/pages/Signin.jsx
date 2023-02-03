import React from 'react';
import '../SassFiles/Signin.sass';


function Signin() {
  return (
    <div className="sign">
        <form >
            <h1>Sign In</h1>
            <input type="email" name="" id=""placeholder='Your Email' />
            <input type="password" name="" id="" placeholder='Password'/>
            <button type="submit">Sign In</button>
        </form>
    </div>
  )
}

export default Signin