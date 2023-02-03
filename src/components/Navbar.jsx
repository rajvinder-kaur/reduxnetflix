import React from 'react';
import { Link } from 'react-router-dom';
import '../SassFiles/Nav.css';


function Navbar() {
    return (
        <div className='nav'>
            <div className="content">
                <div className="logo">
                    <Link to="/">
                        <img src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg" alt="logo" width="100%" />
                    </Link>
                </div>
                <div className="user" >
                    <Link to="/">
                        <img src="https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png" alt="user" width="100%" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
