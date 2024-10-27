import './CardinCart.scss';
import React from 'react';
import deleteCart from '../../assets/delete.svg'
import minus from '../../assets/-.svg'
import plus from '../../assets/+.svg'
import { addProducttoCart, deleteProductfromCart, deleteAllProductsfromCart } from '../../pages/data';


const CardinCart = ({ product}) => {


    const addProduct= (id) => {
      addProducttoCart(id);
    };

    const deleteProduct= (id) => {
        deleteProductfromCart(id);
    };

    const deleteAllProducts= (id) => {
        deleteAllProductsfromCart(id);
    };


  return (
    <div className='card-in-cart'>
        <div className='img-product-in-cart'>
            <img  className='product-img-in-cart' src={product.img} alt={product.title}  />
            <div className='count-in-cart'>
                <button   
                    onClick={() => {deleteProduct(product.id); window.location.reload();}}> 
                    <img src={minus} alt={minus}  />
                </button>
                <p>{product.count}</p>
                <button   
                    onClick={() => {addProduct(product.id); window.location.reload();}}> 
                    <img src={plus} alt={plus}  />
                </button>                
            </div>
        </div>
        <div className='inf-in-cart'>
            <p className='title-in-cart'>{product.title}</p>
            <p className='price-in-cart'>{product.price} P</p>
        </div>
        <div className='price-in-cart'>
            <button   
                onClick={() => {deleteAllProducts(product.id); window.location.reload();}}> 
                <img src={deleteCart} alt={product.title}  />
            </button>
            <p className='price-in-cart'>{product.price} P</p>
        </div>

    </div>
  );
};

export default CardinCart;