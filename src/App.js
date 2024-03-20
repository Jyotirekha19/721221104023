import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Product from './components/Product'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    
    <Header/>

    <Routes>
  
    <Route path='/' element={<> <Home/> <Header/> </>}></Route>
    
    <Route path='/product' element={<> <Product/> <Header/> </>}></Route>
  

   </Routes>

    
     
    </BrowserRouter>
  )
}

export default App
