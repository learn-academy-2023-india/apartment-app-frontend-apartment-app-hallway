import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import SignUp from "../pages/SignUp"
import "@testing-library/jest-dom"

const mockSignup = jest.fn()

describe("<SignUp />", () => {
  beforeEach(() => {
    mockSignup.mockClear()
  })

  it("calls signup with correct data on form submission", () => {
    render(
      <BrowserRouter>
        <SignUp signup={mockSignup} />
      </BrowserRouter>
    )
    
    fireEvent.change(screen.getByPlaceholderText("email"), { target: { value: "janet.doezer@gmail.com" } })
    fireEvent.change(screen.getByPlaceholderText("password"), { target: { value: "password123" } })
    fireEvent.change(screen.getByPlaceholderText("confirm password"), { target: { value: "password123" } })

    fireEvent.click(screen.getByRole('button', { name: /submit/i }))

    expect(mockSignup).toHaveBeenCalledWith({
      user: {
        email: "janet.doezer@gmail.com",
        password: "password123",
      }
    })
  })
})