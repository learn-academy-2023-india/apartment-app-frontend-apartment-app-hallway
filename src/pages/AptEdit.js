import React, { useState } from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"

const AptEdit = ({ currentUser, apartments, editApartment }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const apartmentToEdit = apartments.find(
    (apartment) => apartment.id === parseInt(id)
  )

  // Initialize state with apartment's properties or provide fallbacks for undefined values.
  // Optional chaining (?.) allows safe access to nested properties. This ensures that accessing properties of `apartmentToEdit` won't throw errors if `apartmentToEdit` is undefined.
  // Logical OR (|| '') provides default empty string values for potentially undefined properties. This ensures form inputs are initialized properly, avoiding issues with React's handling of undefined or null input values.
  const [currentApt, setCurrentApt] = useState({
    street: apartmentToEdit?.street || "",
    city: apartmentToEdit?.city || "",
    state: apartmentToEdit?.state || "",
    price: apartmentToEdit?.price || "",
    bedrooms: apartmentToEdit?.bedrooms || "",
    bathrooms: apartmentToEdit?.bathrooms || "",
    pets: apartmentToEdit?.pets || "",
    image: apartmentToEdit?.image || "",
    manager: apartmentToEdit?.manager || "",
    email: apartmentToEdit?.email || "",
    user_id: currentUser?.id,
  })

  const handleChange = (e) => {
    setCurrentApt({ ...currentApt, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    editApartment(currentApt, id)
    navigate("/myapartments")
  }

  return (
    <div className="new-body">
      <h1>Update Listing</h1>
      <Form className="form" onSubmit={handleSubmit}>
        <FormGroup className="form-group">
          <Label for="street">Street</Label>
          <Input
            id="street" 
            type="text"
            name="street"
            onChange={handleChange}
            value={currentApt.street}
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="city">City</Label>
          <Input
            id="city" 
            type="text"
            name="city"
            onChange={handleChange}
            value={currentApt.city}
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="state">State</Label>
          <Input
            id="state" 
            type="text"
            name="state"
            onChange={handleChange}
            value={currentApt.state}
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="price">Price</Label>
          <Input
            id="price" 
            type="text"
            name="price"
            onChange={handleChange}
            value={currentApt.price}
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="bedrooms">Bedrooms</Label>
          <Input
            id="bedrooms"
            type="number"
            name="bedrooms"
            onChange={handleChange}
            value={currentApt.bedrooms}
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="bathrooms">Bathrooms</Label>
          <Input
            id="bathrooms"
            type="number"
            name="bathrooms"
            onChange={handleChange}
            value={currentApt.bathrooms}
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="pets">Pets</Label>
          <Input
            id="pets"
            type="text"
            name="pets"
            onChange={handleChange}
            value={currentApt.pets}
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="image">Image URL</Label>
          <Input
            id="image"
            type="text"
            name="image"
            onChange={handleChange}
            value={currentApt.image}
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="manager">Manager</Label>
          <Input
            id="manager"
            type="text"
            name="manager"
            onChange={handleChange}
            value={currentApt.manager}
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            value={currentApt.email}
          />
        </FormGroup>
        <Button type="submit" className="new-button">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AptEdit