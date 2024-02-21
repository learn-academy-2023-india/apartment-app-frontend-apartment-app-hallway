import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import AptEdit from "../pages/AptEdit"
import "@testing-library/jest-dom"

const mockEditApartment = jest.fn()

const mockApartment = {
  id: 1,
  street: "101 Rimrock",
  unit: "9A",
  city: "San Diego",
  state: "CA",
  square_footage: 500,
  price: "1800",
  bedrooms: 2,
  bathrooms: 2.0,
  pets: "Yes",
  image: "http://tinyurl.com/bdf8wvhj",
  user_id: 1,
}
const mockUser = { id: 1, name: "Janet Doezer" }

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "1",
  }),
  useNavigate: () => jest.fn(),
}))

describe("<AptEdit />", () => {
  it("allows editing of an apartment", async () => {
    render(
      <BrowserRouter>
        <AptEdit
          currentUser={mockUser}
          apartments={[mockApartment]}
          editApartment={mockEditApartment}
        />
      </BrowserRouter>
    )

    fireEvent.change(screen.getByLabelText(/street/i), {
      target: { value: "456 Elm St" },
    })
    fireEvent.change(screen.getByLabelText(/city/i), {
      target: { value: "Newville" },
    })

    fireEvent.click(screen.getByText(/submit/i))

    expect(mockEditApartment).toHaveBeenCalledWith(
      expect.objectContaining({
        street: "456 Elm St",
        city: "Newville",
      }),
      "1") 
  })
})