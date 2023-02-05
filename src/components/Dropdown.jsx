import React from 'react'
import '../SassFiles/Dropdown.sass'
import { useNavigate } from 'react-router-dom'

function Dropdown({fun}) {
  return (



     <div className="drop">
        <li>Profile</li>
        <li>Settings</li>
        <li>
            <button onClick={fun} >
                Logout
            </button>
        </li>
     </div>
  )
}

export default Dropdown