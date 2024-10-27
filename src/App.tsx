
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"></link>
import './App.css'
import  ProductList  from './pages/ProductList'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link , Routes} from 'react-router-dom';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import { Navbar } from './components/Navbar/Navbar';
import cart from '../src/assets/cart.svg'
import '../src/components/Navbar/Navbar.scss'; 
import { Footer } from './components/Footer/Footer';
const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
    <Navbar/>
    <Router>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
    </Router>
    <Footer/>
    </>
  );
};

export default App;