import {Routes,Route} from "react-router-dom"


import React from 'react'
import Home from "../Pages/Home"
import Adduser from "../Pages/Adduser"
import Edituser from "../Pages/Edituser"

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/adduser" element={<Adduser/>}/>
        <Route path="/edituser/:id" element={<Edituser/>}/>
    </Routes>
  )
}

export default AllRoutes