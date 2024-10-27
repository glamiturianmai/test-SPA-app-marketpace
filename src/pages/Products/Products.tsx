import './Products.scss'
import React, { useEffect, useState } from 'react';
import { getProducts, addProducttoCart } from '../../pages/data';
import cart from '../assets/cart.svg'
import CardProduct from '../../components/CardProduct/CardProduct';

const Products = () => {
  
    const products = getProducts();

    const handleAddToCart = (id) => {
      addProducttoCart(id);
    };
   

  
  return (
    <div className='container'>
      <div className='container-product'>
      <h2>Наушники</h2>
      <div className='cards'>
      {products.map((product) => (
        <CardProduct
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
    
    </div>
    </div>
    
  );
};

export default Products;