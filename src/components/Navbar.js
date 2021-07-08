import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 px-5">
            <Link to="/" className="navbar-brand ml-5">Contact App</Link>
        </nav>
    )
}

export default Navbar;
