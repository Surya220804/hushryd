import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForDriver from './components/ForDriver/ForDriver'
import NewRide from './components/NewRide/NewRide'
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<NewRide />} />
          <Route path='/Fordrivers' element={<ForDriver />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  )
}

export default App
