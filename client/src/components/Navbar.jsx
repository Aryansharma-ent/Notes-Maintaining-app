import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaStickyNote } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <h1><FaStickyNote/> Notes</h1>
        </Link>
      </div>
      <ul className="navbar-menu">
        <Link to="/">
          <li className={location.pathname === '/' ? 'nav-item active' : 'nav-item'}>
            Home
          </li>
        </Link>
        <Link to="/add-note">
          <li className={location.pathname === '/add-note' ? 'nav-item active' : 'nav-item'}>
            Add Note
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
