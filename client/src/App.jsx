import 'bootstrap/dist/css/bootstrap.css'
import Header from "./components/header"
import Footer from './components/Footer'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Page404 from './components/Page404'
import { Routes, Route, useNavigate } from 'react-router-dom'
import CarCreate from './components/CarCreate'
import Login from './components/Login'
import About from './components/About'
import Register from './components/Register'
import { useState } from 'react'
// import AuthContext, { AuthProvider } from './contexts/authContext'
import { AuthProvider } from './contexts/authContext'
import * as authService from './services/authService'
import Path from './paths'
import Logout from './components/Logout'

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');
    return {};
  });

  const loginSubmitHandler = async (values) => {
    console.log(values);
    const result = await authService.login(values.email, values.password);
    console.log(result)
    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);
    navigate(Path.Home);
  };

  const registerSubmitHandler = async (values) => {
    console.log(values);
    const result = await authService.register(values.email, values.password);
    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);
    navigate(Path.Home);
  }

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');
  };


  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  }

  return (
    <AuthProvider value={values}>
      <div >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<CarCreate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-car" element={<CarCreate />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App
