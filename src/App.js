import "./App.css"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentProtectedIndex from "./pages/ApartmentProtectedIndex"
import ApartmentShow from "./pages/ApartmentShow"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import mockApartments from "./mockApartments"
import mockUsers from "./mockUsers"
import NotFound from "./pages/NotFound"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)

  return (
    <>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/apartmentindex"
          element={<ApartmentIndex apartments={apartments} />}
        />
        {currentUser && (
          <Route
            path="/myapartments"
            element={
              <ApartmentProtectedIndex
                apartments={apartments}
                currentUser={currentUser}
              />
            }
          />
        )}
        <Route
          path="/apartmentshow/:id"
          element={<ApartmentShow apartments={apartments} />}
        />
        <Route
          path="/apartmentnew"
          element={<ApartmentNew currentUser={currentUser} />}
        />
        <Route
          path="/apartmentedit/:id"
          element={
            <ApartmentEdit currentUser={currentUser} apartments={apartments} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App