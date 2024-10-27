import React, { useEffect, useState } from 'react';
import { getProducts, toggleProductSelection } from '../data';
import CardinCart from '../../components/CardinCart/CardinCart';
import './Cart.scss'
const Cart = () => {
    

    const products = getProducts().filter(product => (product.count > 0));
    const totalCost = products.reduce((total, product) => {
        return total + product.count * product.price;
    }, 0);
    return (
        <div className='container'>
        <div className='cart-product'>
        <h2>Выбранные товары</h2>
        <div className='container'>
            <div className='carts'>
                {products.length > 0 ? products.map((product) => (
                <CardinCart
                    key={product.id}
                    product={product}
                />
                )) : <h2>Нет выбранных товаров</h2>}
            </div>
            <div className='total'> 
                <div className='text'>
                    <p>ИТОГО</p>
                    <p>{totalCost} Р</p>
                </div>
                <button>Перейти к оформлению</button>
            </div>
            
        </div>
        </div>
        </div>
    );
};

export default Cart;