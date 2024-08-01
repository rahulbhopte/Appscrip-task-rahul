import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar'
import Home from './component/Home';
import ProductListning from './component/ProductListning';
import Footer from './component/Footer';
import Topslider from './component/Topslider';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Topslider/>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="Appscrip-task-rahul/" element={<ProductListning/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
