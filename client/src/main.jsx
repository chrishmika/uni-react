import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Count from './components/Count';
import Products from './components/Products';
import Product from './components/Product';




createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/count" element={<Count />} />
    </Routes>

    <Routes>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<Product/>}/>
    </Routes>
  </BrowserRouter>
)
