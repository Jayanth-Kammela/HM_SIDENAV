import React from 'react'
import { Link, Outlet } from "react-router-dom";


const MergedComponent = () => {
    return (
        <>
            
            <Link to='/Books/1'>Child Book 1</Link><br />
            <Link to='/Books/2'>Child Book 2</Link><br />
            <Link to='/Books/new'>New Book</Link>
            <Outlet/>
        </>
    )
}

export default MergedComponent