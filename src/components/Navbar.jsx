import React from 'react';
import { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import '../SassFiles/Nav.css';


function Navbar({ title }) {
const [ show,handleShow] = useState(false)
const transition = () =>{
    if (window.scrollY > 500){
        handleShow(true)
    }else{
        handleShow(false)
    }
}
    useEffect(()=>{
        window.addEventListener("scroll",transition)
        return()=> window.removeEventListener("scroll",transition)
    })

    if (title == "Home") {
        return (
            <div className={`nav ${show && "nav_black"}`}>
                <div className="content">
                    <div className="logo">
                            <img src="https://andrewjamesspooner.com/wp-content/uploads/2019/06/netflix-logo-e1536243210766-1024x284.png" alt="logo" width="100%" />
                        <div className="user" >
                            <Link to="/main">
                                <img src="https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png" alt="user" width="100%" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>)
    } else {
        return (
            <div className='nav'>
                <div className="content">
                    <div className="logo">
                        <Link to="/">
                            <img src="https://andrewjamesspooner.com/wp-content/uploads/2019/06/netflix-logo-e1536243210766-1024x284.png" alt="logo" width="100%" />
                        </Link>
                        <div className="signin">
                            <button>
                                <Link to="/signin">{title}</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
