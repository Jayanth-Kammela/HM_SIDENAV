import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const BootstrapNav = () => {
    const [toggle, setToggle] = useState(false);
    const forToggle = () => setToggle(!toggle);
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light shadow p-0">

                <div className="container-fluid">

                    <NavLink to="/" className="nav-logo d-flex align-items-center text-secondary ps-5 text-decoration-none nav-link">WebX</NavLink>

                    <ul className={`navbar-nav text-center d-flex justify-content-end ${toggle} ? nav-menu active: nav-menu`}>
                        <li><NavLink href="#" className="nav-link p-0 text-dark">Home</NavLink></li>
                        <li><NavLink href="#" className="nav-link p-0 text-dark">About</NavLink></li>
                        <li><NavLink href="#" className="nav-link p-0 text-dark">Services</NavLink></li>
                        <li><NavLink href="#" className="nav-link p-0 text-dark">Contact-us</NavLink></li>
                    </ul>
                    <div className="nav-icon" onClick={forToggle}>
                        {toggle ? <i className="bi bi-x text-secondary"></i> : <i className="bi bi-list bi-list text-secondary"></i>}
                    </div>


                </div>
            </nav>
        </>
    )
}

export default BootstrapNav