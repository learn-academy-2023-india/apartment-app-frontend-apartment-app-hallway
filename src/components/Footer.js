import React from "react"

const Footer = () => {
  return (
    <div className="footer">
      <h3 style={{ fontSize: "15px" }}>
        &copy; {new Date().getFullYear()} LEARN Academy | Apartment App. All
        rights reserved. Made with{" "}
        <span role="img" aria-label="heart">
          💜
        </span>{" "}
        by Hallway
      </h3>
    </div>
  )
}

export default Footer