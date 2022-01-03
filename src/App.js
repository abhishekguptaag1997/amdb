import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Trial from './component/Trial'
import Home from './pages/Home'

const App = () => {
  return (
    <div style={{backgroundColor:"#121212"}}>
      <BrowserRouter>
        <Navbar />
        <div style={{margin:"0 8vw"}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      {/* <Trial /> */}
    </div>
  )
}

export default App
