import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Homesecreen from './Homescreen';
import Log from './Log';
import Main from './Main';
import Register from './Register';
import Signin from './Signin';

function Page() {
  return (
    <div>
      <Routes>
        <Route path='/main' element={<Main />} />
        <Route path="/" element={<Log />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/register' element={<Register />} />
        
      </Routes>
    </div>
  )
}

export default Page
