import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Homesecreen from './Homescreen';


function Page() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homesecreen/>} />
      </Routes>
    </div>
  )
}

export default Page
