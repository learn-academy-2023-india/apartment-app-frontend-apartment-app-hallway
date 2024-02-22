import React from "react"
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { NavLink } from "react-router-dom" 

const AptProtectedIndex = ({ currentUser, apartments }) => {
  
  const userApartments = apartments.filter(apartment => apartment.user_id === currentUser.id).map((apartment, index) => (
    <Card key={index} className="apartmentpro-cards">
      <CardImg
        top
        width="100%"
        src={apartment.image}
        alt={`Apartment at ${apartment.street}`} 
        className="apartment-picture"
      />
      <CardBody>
        <div className="apartment-text">
          <CardTitle>
            <b>${apartment.price}/month</b>
          </CardTitle>
          <CardSubtitle>
            {apartment.street}, {apartment.city}, {apartment.state}
          </CardSubtitle>
          <CardSubtitle>
            {apartment.bedrooms} Bedroom(s), {apartment.bathrooms} Bath(s)
          </CardSubtitle>
        </div>
        <NavLink to={`/aptshow/${apartment.id}`} className="nav-link">
          <Button className="apartmentpro-button">More Details</Button>
        </NavLink>
      </CardBody>
    </Card>
  ))

  return (
    <div className="apartments-body"> 
      {userApartments.length > 0 ? userApartments : <p>No apartments listed.</p>}
    </div>
  )
}

export default AptProtectedIndex