import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import AptShow from "../pages/AptShow"
import "@testing-library/jest-dom"

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "1", 
  }),
  NavLink: ({ children }) => children,
}))

const mockDeleteApartment = jest.fn()

const apartments = [
  {
    id: 1,
    street: "101 Rimrock",
    city: "San Diego",
    state: "CA",
    price: "1800",
    bedrooms: 2,
    bathrooms: 2.0,
    pets: "Yes",
    image: "http://tinyurl.com/bdf8wvhj",
    user_id: 1,
    manager: "Janet Doezer",
    email: "janet.doezer@gmail.com",
  },
]

const currentUser = { id: 1, email: "janet.doezer@gmail.com" }

describe("<AptShow />", () => {
  it("displays apartment details correctly and allows interaction", () => {
    render(
      <BrowserRouter>
        <AptShow
          apartments={apartments}
          currentUser={currentUser}
          deleteApartment={mockDeleteApartment}
        />
      </BrowserRouter>
    )

    const deleteButton = screen.getByRole('button', { name: /Delete Listing/i })
    expect(deleteButton).toBeInTheDocument() 

    fireEvent.click(deleteButton) 

    expect(mockDeleteApartment).toHaveBeenCalledWith(1) 
  })
})