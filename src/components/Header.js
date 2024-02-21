import React from "react"
import { Nav, NavItem, NavLink } from "reactstrap"
import { useNavigate } from "react-router-dom"

const Header = ({ current_user, logout }) => {
  const navigate = useNavigate()

  const handleLogout = (event) => {
    event.preventDefault()
    logout()
    navigate("/")
  }

  return (
    <div>
      <header className="header">
        <h1>Apartment App</h1>
      </header>
      <Nav className="nav">
        <NavItem>
          <NavLink to="/apartmentindex" className="nav-link">
            View Listings
          </NavLink>
        </NavItem>
        {current_user ? (
          <>
            <NavItem>
              <NavLink to="/myapartments" className="nav-link">
                My Listings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/apartmentnew" className="nav-link">
                Create Listing
              </NavLink>
            </NavItem>
            <NavItem>
              <form onSubmit={handleLogout}>
                <button type="submit" className="nav-link btn-link">
                  Log Out
                </button>
              </form>
            </NavItem>
          </>
        ) : (
          <>
            <NavItem>
              <NavLink to="/login" className="nav-link">
                Sign In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup" className="nav-link">
                Sign Up
              </NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </div>
  )
}

export default Header