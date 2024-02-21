import React from "react"
import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import NotFound from "../pages/NotFound"

describe("<NotFound />", () => {
  it("displays the 404 message and a return home link", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    expect(screen.getByRole("heading", { name: /404/i })).toBeInTheDocument()
    expect(screen.getByText(/This page is currently on a house-hunting adventure!/i)).toBeInTheDocument()
    const returnHomeLink = screen.getByText("Return Home")
    expect(returnHomeLink).toBeInTheDocument()
    expect(returnHomeLink).toHaveAttribute("href", "/")
  })
})