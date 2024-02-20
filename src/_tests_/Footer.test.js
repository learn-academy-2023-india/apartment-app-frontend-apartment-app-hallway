import React from "react"
import { BrowserRouter } from "react-router-dom"
import { render } from "@testing-library/react"
import Footer from "../components/Footer"

describe("<Footer />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
      div
    )
  })
})