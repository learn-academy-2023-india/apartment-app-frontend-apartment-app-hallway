import React from "react"
import { NavLink } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h3>This page is currently on a house-hunting adventure!</h3>
      <NavLink to="/" className="home-button">Return Home</NavLink>
    </div>
  )
}

export default NotFound