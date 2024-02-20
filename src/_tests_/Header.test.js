import React from "react"
import { BrowserRouter } from "react-router-dom"
import { render } from "@testing-library/react"
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
})