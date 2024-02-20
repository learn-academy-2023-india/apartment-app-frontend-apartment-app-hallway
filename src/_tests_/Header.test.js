import React from "react"
import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import Header from "../components/Header"

describe("<Header />", () => {
  
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
  })

  it("displays the header text", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    const headerText = screen.getByText(/Apartment App/i)
    expect(headerText).toBeInTheDocument()
  })
})
