import React from "react"
import { NavLink } from "react-router-dom"
import HomeBackgroundImage from "../assets/HomeBackgroundImage.png"

const Home = ({ currentUser }) => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${HomeBackgroundImage})` }}>
      <div className="welcome-message">
        <h1>Welcome to Your Future Home!</h1>
        <p>Embark on a seamless journey to discover your perfect residence. From the latest listings to exclusive properties, we connect you directly with the heartbeats of vibrant communities. For property managers, our platform offers a streamlined experience to showcase your apartments and engage with potential tenants. Let's find where your story begins—because finding a home means finding a place where you truly belong.</p>
        <NavLink to="/listings" className="explore-button">Explore Listings</NavLink>
      </div>
    </div>
  )
}

export default Home