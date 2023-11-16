import 'bootstrap/dist/css/bootstrap.css'
import Header from "./components/header"
import Footer from './components/Footer'
import Home from './components/Home'
import Gallery from './components/Gallery'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="background">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
