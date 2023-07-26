// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import './MainNav.css'

// function MainNav() {
//     const [toggle, setToggle] = useState(false);

//     const forToggle = () => setToggle(!toggle);

//     return (
//         <>
//             <nav className="navbar shadow-lg d-flex align-items-center ">
//                 <div className="nav-container d-flex align-items-center">
//                     <NavLink to="/" className="nav-logo d-flex align-items-center text-secondary ps-5 text-decoration-none nav-link">WebX</NavLink>
//                     <ul className={toggle ? "nav-menu active" : "nav-menu"}>
//                         <NavLink className="nav-link text-secondary pe-5 text-decoration-none">Home</NavLink>
//                         <NavLink className="nav-link text-secondary pe-5 text-decoration-none">Services</NavLink>
//                         <NavLink className="nav-link text-secondary pe-5 text-decoration-none">Contact</NavLink>
//                         <NavLink className="nav-link text-secondary pe-5 text-decoration-none">Login</NavLink>
//                     </ul>
//                     <div className="nav-icon" onClick={forToggle}>
//                         {toggle ? <i className="bi bi-x text-secondary"></i> : <i className="bi bi-list bi-list text-secondary"></i>}
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default MainNav;


import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MainNav.css'

const NewNav = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <section className="section1">
                <nav className="navbar  bg-dark align-items-center p-0">
                    <NavLink href="#" className="nav-link text-secondary px-3 fs-4 text-decoration-none">WebX</NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <NavLink className="nav-link text-secondary px-3 text-decoration-none">Home</NavLink>
                        <NavLink className="nav-link text-secondary px-3 text-decoration-none">About</NavLink>
                        <NavLink className="nav-link text-secondary px-3 text-decoration-none">Services</NavLink>
                        <NavLink className="nav-link text-secondary px-3 text-decoration-none">Contact us</NavLink>
                        
                    </ul>

                    <div className="nav-icon active" onClick={handleClick}>
                        {click ? <i className="bi bi-x text-light"></i> : <i className="bi bi-list bi-list text-light"></i>}
                    </div>
                </nav>
            </section>
        </>
    )
}

export default NewNav