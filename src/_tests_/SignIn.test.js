import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import SignIn from "../pages/SignIn"
import "@testing-library/jest-dom"

const mockSignIn = jest.fn()

describe("<SignIn />", () => {
  beforeEach(() => {
    mockSignIn.mockClear()
  })

  it("calls signIn with correct data on form submission", () => {
    render(
      <BrowserRouter>
        <SignIn signIn={mockSignIn} />
      </BrowserRouter>
    )

    fireEvent.change(screen.getByPlaceholderText("email"), { target: { value: "janet.doezer@gmail.com" } })
    fireEvent.change(screen.getByPlaceholderText("password"), { target: { value: "password123" } })

    fireEvent.click(screen.getByRole('button', { name: /sign in/i }))

    expect(mockSignIn).toHaveBeenCalledWith({
      user: {
        email: "janet.doezer@gmail.com",
        password: "password123"
      }
    })
  })
})