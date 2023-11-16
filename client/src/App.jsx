import 'bootstrap/dist/css/bootstrap.css'
import Header from "./components/header"
import Footer from './components/Footer'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Page404 from './components/Page404'
import { Routes, Route } from 'react-router-dom'
import CarCreate from './components/CarCreate'

function App() {
  return (
    <div className="background">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<Home />} />
        <Route path="/create" element={<CarCreate />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
