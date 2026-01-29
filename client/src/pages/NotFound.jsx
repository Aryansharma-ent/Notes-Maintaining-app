import React from 'react'
import { Link } from 'react-router-dom'
import { TbError404 } from "react-icons/tb"
import { FaHome } from "react-icons/fa"

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-icon">
          <TbError404 />
        </div>
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-text">
          Oops! The page you're looking for doesn't exist.
          <br />
          It might have been moved or deleted.
        </p>
        <Link to="/">
          <button className="not-found-btn">
            <FaHome /> Go Back Home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
