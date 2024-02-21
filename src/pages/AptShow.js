import React from "react"
import { useParams, NavLink } from "react-router-dom"
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from "reactstrap"

const AptShow = ({apartments, current_user, deleteApartment}) => {

  let {id} = useParams()
  const currentApartment = apartments?.find((apartment) => apartment.id === +id)


  return (
    <>
    <div className="apartments-body">
      {currentApartment &&      
        <Card className="apartment-card">
          <CardImg top width="100%" src={currentApartment?.image} alt="" />
          <CardBody className="apartmentshow-text apartment-font-size">
            <div className="grid-row">
              <div className="show-apartment-info">
                <CardTitle><b>${currentApartment?.price}/month</b></CardTitle>
                <CardSubtitle>{currentApartment?.street}, {currentApartment?.city}, {currentApartment?.state}</CardSubtitle>
                <CardSubtitle>{currentApartment.bedrooms} Bedroom {currentApartment?.bathrooms}, Bath</CardSubtitle>
                <CardSubtitle>Pets: {currentApartment?.pets}</CardSubtitle>
              </div>
              <div className="show-contact-info">
                <CardSubtitle><b>Contact Us!</b></CardSubtitle>
                <CardSubtitle>Manager: {currentApartment?.manager}</CardSubtitle>
                <CardSubtitle>Email: {currentApartment?.email}</CardSubtitle>
              </div>
              {current_user?.id === currentApartment?.user_id &&
                  <div className="show-button">            
                  <NavLink to={`/aptedit/${currentApartment?.id}`} className="nav-link edit-listing">
                    <Button className="apartmentshow-button">
                        Edit Listing
                    </Button>
                  </NavLink>
                  <NavLink to={`/myapartments`} className="nav-link">
                    <Button onClick={() => deleteApartment(currentApartment?.id)} className="apartmentshow-button">
                        Delete Listing
                    </Button>
                  </NavLink>
                </div>     
              }
            </div>
            <NavLink to={`/aptindex`} className="nav-link">
              <Button className="apartmentshow-button">Back to Listings</Button>
            </NavLink>
          </CardBody>
        </Card>
      }
    </div>
    </>
  )
}

export default AptShow