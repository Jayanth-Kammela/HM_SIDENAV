import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Books from './Books'
import Bookslist from './Bookslist'
import Home from './Home'
import MergedComponent from './MergedComponent'
import NewBooks from './NewBooks'
import Notfound from './Notfound'




const MainRoute = () => {
    return (
        <>
            <Link to='/'>Home</Link> <br />
            <Link to='/Books'>Parent BooksList</Link><br />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/Books" element={<MergedComponent />}>
                    <Route index element={<Bookslist />} />
                    <Route path=":id" element={<Books />} />
                    <Route path="new" element={<NewBooks />} />
                </Route>

                <Route path="*" element={<Notfound />} />
            </Routes>
        </>
    )
}

export default MainRoute