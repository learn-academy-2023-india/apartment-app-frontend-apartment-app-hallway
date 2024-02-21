import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import AptNew from "../pages/AptNew"
import "@testing-library/jest-dom"

const mockCreateApartment = jest.fn()

const mockCurrentUser = { id: 1, name: "Janet Doezer" }

describe("<AptNew />", () => {
  beforeEach(() => {
    mockCreateApartment.mockClear()
  })

  it("allows creation of a new apartment", () => {
    render(
      <BrowserRouter>
        <AptNew createApartment={mockCreateApartment} currentUser={mockCurrentUser} />
      </BrowserRouter>
    )

    fireEvent.change(screen.getByLabelText(/Street:/i), { target: { value: "456 Elm St" } })
    fireEvent.change(screen.getByLabelText(/City:/i), { target: { value: "Newville" } })
    fireEvent.change(screen.getByLabelText(/State:/i), { target: { value: "NV" } })
    fireEvent.change(screen.getByLabelText(/Price per month:/i), { target: { value: "1200" } })
    fireEvent.change(screen.getByLabelText(/Bedrooms:/i), { target: { value: "2" } })
    fireEvent.change(screen.getByLabelText(/Bathrooms:/i), { target: { value: "1" } })
    fireEvent.change(screen.getByLabelText(/Pets:/i), { target: { value: "Yes" } })
    fireEvent.change(screen.getByLabelText(/Image URL:/i), { target: { value: "http://tinyurl.com/bdf8wvhj" } })
    fireEvent.change(screen.getByLabelText(/Manager:/i), { target: { value: "Janet Doezer" } })
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: "janet.doezer@gmail.com" } })

    fireEvent.click(screen.getByText(/Submit/i))

    expect(mockCreateApartment).toHaveBeenCalledWith(expect.objectContaining({
      street: "456 Elm St",
      city: "Newville",
      state: "NV",
      price: "1200",
      bedrooms: "2",
      bathrooms: "1",
      pets: "Yes",
      image: "http://tinyurl.com/bdf8wvhj",
      manager: "Janet Doezer",
      email: "janet.doezer@gmail.com",
      user_id: 1,
    }))
  })
})