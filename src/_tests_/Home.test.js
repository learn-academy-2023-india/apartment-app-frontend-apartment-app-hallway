import React from "react"
import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import Home from "../pages/Home"

describe("<Home />", () => {
  it("renders the welcome message and explore listings link", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    expect(
      screen.getByText(/Welcome to Your Future Home!/i)
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        /Embark on a seamless journey to discover your perfect residence./i
      )
    ).toBeInTheDocument()

    const exploreListingsLink = screen.getByText("Explore Listings")
    expect(exploreListingsLink).toBeInTheDocument()
    expect(exploreListingsLink).toHaveAttribute("href", "/listings")
  })
})