import React from "react"
import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import Footer from "./components/Footer"

describe("<Footer />", () => {
  it("contains the correct copyright text and current year", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const currentYear = new Date().getFullYear()
    const footerYearText = screen.getByText(new RegExp(currentYear.toString()))
    expect(footerYearText).toBeInTheDocument()
  })

  it("includes a heart emoji for love", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    expect(screen.getByRole("img", { name: "heart" })).toBeInTheDocument()
  })
})