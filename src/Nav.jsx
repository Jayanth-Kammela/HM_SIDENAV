import React from 'react'
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Home from './Home'
import Signin from './Signin';

const Dashnav = () => {
  return (
    <>


    <nav class="navbar navbar-expand-lg shadow-lg">
      <div class="container-fluid">

        <a href="#" class="navbar-brand">WebX</a>
        <button href="#hamburger" class=" d-lg-none d-sm-block d-md-block  btn d-lg-sm-none btn-muted btn-outline" data-bs-toggle="offcanvas" role="button" aria-controls="hamburger"><span class="navbar-toggler-icon d-lg-none "></span></button>


        <div class="offcanvas offcanvas-end" tabindex="-1" id="hamburger" aria-labelledby="sidebar-label">

          <div class="offcanvas-header">
            <h4 class="offcnvas-title" id="sidebar-label">WebX</h4>
            <button class="btn-close mx-1" data-bs-dismiss="offcanvas" aria-label=""></button>
          </div>

          <ul class="navbar-nav text-center d-flex justify-content-end px-5 text-center ">

            <li className='d-flex align-items-center'><NavLink to='/' style={({isActive})=>{
              return isActive?{fontWeight:"bold",color:"blue"}:{color:"black"}
            }} className="nav-link px-lg-4 px-md-3 text-center">Home</NavLink></li>

            <li className='d-flex align-items-center'>
              <NavLink className='h5 text-dark nav-link text-center p-1 m-0'><i class="bi bi-three-dots-vertical mx-2"></i></NavLink>
            </li>

            <li className='d-flex align-items-center'>
              <NavLink className='h6 text-light nav-link btn btn-primary text-center pe-2 m-0' to='/Signin' style={({isActive})=>{
              return isActive?{background:"crimson"}:{color:"black"}
            }} ><i class="bi bi-person-circle mx-1"></i>Sign in</NavLink>
            </li>

          </ul>

        </div>

      </div>
    </nav>





    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Signin' element={<Signin/>} />
    </Routes>
  </>
  )
}

export default Dashnav