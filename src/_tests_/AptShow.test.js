import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import AptShow from "../pages/AptShow"
import "@testing-library/jest-dom"

// Mock react-router-dom useParams and NavLink functionalities
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
    unit: "9A",
    city: "San Diego",
    state: "CA",
    square_footage: 500,
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

const current_user = { id: 1, email: "janet.doezer@gmail.com" }

describe("<AptShow />", () => {
  it("displays apartment details correctly and allows interaction", () => {
    render(
      <BrowserRouter>
        <AptShow
          apartments={apartments}
          current_user={current_user}
          deleteApartment={mockDeleteApartment}
        />
      </BrowserRouter>
    )

    // Ensure apartment details are displayed
    expect(screen.getByText(/\$1800\/month/i)).toBeInTheDocument()
    expect(screen.getByText(/101 Rimrock, San Diego, CA/i)).toBeInTheDocument()
    expect(screen.getByText(/2 Bedroom/)).toBeInTheDocument() 
    expect(screen.getByText(/2, Bath/)).toBeInTheDocument()
    expect(screen.getByText(/Pets: Yes/i)).toBeInTheDocument()
    expect(screen.getByText(/Contact Us!/i)).toBeInTheDocument()
    expect(screen.getByText(/Manager: Janet Doezer/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Email: janet.doezer@gmail.com/i)
    ).toBeInTheDocument()

    // Check delete button and functionality
    fireEvent.click(screen.getByText(/Delete Listing/i))

    expect(mockDeleteApartment).toHaveBeenCalledWith(1)
  })
})