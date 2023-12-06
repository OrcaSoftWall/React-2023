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
import Path from './paths';

import Logout from './components/Logout'
import CarDetails from './components/CarDetails'
import CarEdit from './components/CarEdit'

function App() {

  return (
    <AuthProvider>
      <div >
        <Header />
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Gallery} element={<Gallery />} />
          <Route path={Path.Detais} element={<CarDetails />} />
          <Route path={Path.AddCar} element={<CarCreate />} />
          <Route path={Path.EditCar} element={<CarEdit />} />
          <Route path={Path.About} element={<About />} />
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Logout} element={<Logout />} />
          <Route path={Path.Register} element={<Register />} />
          <Route path={Path.Rest} element={<Page404 />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App
