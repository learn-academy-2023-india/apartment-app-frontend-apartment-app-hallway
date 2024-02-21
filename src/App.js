import "./App.css"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import AptEdit from "./pages/AptEdit"
import AptIndex from "./pages/AptIndex"
import AptNew from "./pages/AptNew"
import AptProtectedIndex from "./pages/AptProtectedIndex"
import AptShow from "./pages/AptShow"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import mockApartments from "./mockData/mockApartments"
import mockUsers from "./mockData/mockUsers"
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
          path="/aptindex"
          element={<AptIndex apartments={apartments} />}
        />
        {currentUser && (
          <Route
            path="/myapartments"
            element={
              <AptProtectedIndex
                apartments={apartments}
                currentUser={currentUser}
              />
            }
          />
        )}
        <Route
          path="/aptshow/:id"
          element={<AptShow apartments={apartments} />}
        />
        <Route
          path="/aptnew"
          element={<AptNew currentUser={currentUser} />}
        />
        <Route
          path="/aptedit/:id"
          element={
            <AptEdit currentUser={currentUser} apartments={apartments} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App