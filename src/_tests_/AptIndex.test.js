import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import AptIndex from "../pages/AptIndex"
import "@testing-library/jest-dom"

const mockApartments = [
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
  },
  {
    id: 2,
    street: "720 Second Avenue",
    city: "San Diego",
    state: "CA",
    price: "2500",
    bedrooms: 2,
    bathrooms: 2.0,
    pets: "Yes",
    image: "http://tinyurl.com/yc2c33b7",
  },
]

describe("<AptIndex />", () => {
  it("displays apartments correctly", () => {
    render(
      <BrowserRouter>
        <AptIndex apartments={mockApartments} />
      </BrowserRouter>
    )

    expect(screen.getByText("$1800/month")).toBeInTheDocument()
    expect(screen.getByText("101 Rimrock, San Diego, CA")).toBeInTheDocument()

    expect(screen.getByText("$2500/month")).toBeInTheDocument()
    expect(screen.getByText("720 Second Avenue, San Diego, CA")).toBeInTheDocument()

    const bedroomBathroomDetails = screen.getAllByText("2 Bedroom(s), 2 Bath(s)")
    expect(bedroomBathroomDetails.length).toBe(2)

    const moreDetailsLinks = screen.getAllByRole("link", { name: "More Details" })
    expect(moreDetailsLinks[0]).toHaveAttribute("href", "/aptshow/1")
    expect(moreDetailsLinks[1]).toHaveAttribute("href", "/aptshow/2")
  })
})