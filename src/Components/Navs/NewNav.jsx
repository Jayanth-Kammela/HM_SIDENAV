import { useState } from 'react';
import './NewNav.css'

const NewNav = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <section class="section1">
                <nav class="navbar  bg-secondary d-flex justify-content-space-between align-items-center">
                {/* <div className="nav-container d-flex align-items-center"> */}
                    {/* <a href="#" class="logo">XAZ</a> */}

                    <ul className={click ? "nav-barmenu active" : "nav-barmenu"}>
                        <li className='list-unstyled pe-5'><a href="#" className='text-decoration-none'>Home</a></li>
                        <li className='list-unstyled pe-5'><a href="#">About</a></li>
                        <li className='list-unstyled pe-5'><a href="#">Services</a></li>
                        <li className='list-unstyled pe-5'><a href="#">Contact us</a></li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {click ? <i className="bi bi-x text-light"></i> : <i className="bi bi-list bi-list text-light"></i>}
                    </div>
                {/* </div> */}

                </nav>
            </section>
        </>
    )
}

export default NewNav