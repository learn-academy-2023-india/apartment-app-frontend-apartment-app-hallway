import React from "react"
import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import Header from "../components/Header"

describe("<Header />", () => {

  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })

  it("displays the application title", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    expect(screen.getByText("Apartment App")).toBeInTheDocument()
  })

  it("shows sign in and sign up links when no user is logged in", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    expect(screen.getByText("Sign In")).toBeInTheDocument()
    expect(screen.getByText("Sign Up")).toBeInTheDocument()
  })

  it("shows user-specific navigation items when a user is logged in", () => {
    const mockLogout = jest.fn()
    render(
      <BrowserRouter>
        <Header current_user={{ name: "Test User" }} logout={mockLogout} />
      </BrowserRouter>
    )
    expect(screen.getByText("My Listings")).toBeInTheDocument()
    expect(screen.getByText("Create Listing")).toBeInTheDocument()
    expect(screen.getByText("Log Out")).toBeInTheDocument()
  })
})