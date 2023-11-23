import 'bootstrap/dist/css/bootstrap.css'
import Header from "./components/header"
import Footer from './components/Footer'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Page404 from './components/Page404'
import { Routes, Route } from 'react-router-dom'
import CarCreate from './components/CarCreate'
import Login from './components/Login'
import About from './components/About'
import Register from './components/Register'
// import AuthContext, { AuthProvider } from './contexts/authContext'
import { AuthProvider } from './contexts/authContext'

import Logout from './components/Logout'
import CarDetails from './components/CarDetails'

function App() {

  return (
    <AuthProvider>
      <div >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars/:carId" element={<CarDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cars/add-car" element={<CarCreate />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App
