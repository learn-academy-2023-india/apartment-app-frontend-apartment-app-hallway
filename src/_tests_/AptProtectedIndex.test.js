import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import AptProtectedIndex from "../pages/AptProtectedIndex"
import "@testing-library/jest-dom"

const mockApartments = [
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
    user_id: 1
  },
  {
    id: 2,
    street: "720 Second Avenue",
    unit: "508",
    city: "San Diego",
    state: "CA",
    square_footage: 700,
    price: "2500",
    bedrooms: 2,
    bathrooms: 2.0,
    pets: "Yes",
    image: "http://tinyurl.com/yc2c33b7",
    user_id: 1
  },
  {
    id: 3,
    street: "415 Rainbow Street",
    city: "San Diego",
    state: "CA",
    price: "2000",
    bedrooms: 1,
    bathrooms: 1.0,
    pets: "Small Pets Only",
    image: "http://tinyurl.com/c2jcztze",
    user_id: 2
  }
]

const currentUser = { id: 1 }

describe("<AptProtectedIndex />", () => {
  it("displays only the apartments listed by the current user", () => {
    render(
      <BrowserRouter>
        <AptProtectedIndex currentUser={currentUser} apartments={mockApartments} />
      </BrowserRouter>
    )

    expect(screen.getByText("$1800/month")).toBeInTheDocument()
    expect(screen.getByText("101 Rimrock, San Diego, CA")).toBeInTheDocument()
    expect(screen.getByText("$2500/month")).toBeInTheDocument()
    expect(screen.getByText("720 Second Avenue, San Diego, CA")).toBeInTheDocument()

    expect(screen.queryByText("$3000/month")).not.toBeInTheDocument()
    expect(screen.queryByText("Another Address, Another City, AC")).not.toBeInTheDocument()
  })
})