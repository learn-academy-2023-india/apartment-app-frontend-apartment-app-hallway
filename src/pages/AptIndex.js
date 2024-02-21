import React from "react"
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

const AptIndex = ({ apartments }) => {
  return (
    <div className="apartments-body">
      <h1>Recent Listings</h1>
      <div className="flex-apartments">
        {apartments?.map((apartment) => (
          <Card key={apartment.id} className="apartment-cards">
            <CardImg 
              top 
              width="100%" 
              src={apartment.image} 
              alt={`Apartment at ${apartment.street}`} 
              className="apartment-picture"
            />
            <CardBody>
              <div className="apartment-text">
                <CardTitle><b>${apartment.price}/month</b></CardTitle>
                <CardSubtitle>{apartment.street}, {apartment.city}, {apartment.state}</CardSubtitle>
                <CardSubtitle>{apartment.bedrooms} Bedroom(s), {apartment.bathrooms} Bath(s)</CardSubtitle> 
              </div>
              <NavLink to={`/aptshow/${apartment.id}`} className="nav-link">
                <Button className="apartment-button">More Details</Button>
              </NavLink>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default AptIndex
