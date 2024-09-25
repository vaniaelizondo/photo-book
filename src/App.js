import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import CV from "./pages/CV"
import Contact from "./pages/Contact"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeries" element={<Gallery />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App