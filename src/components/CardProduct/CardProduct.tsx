import './CardProduct.scss'
import React from 'react';
import star from '../../assets/star.png'
const CardProduct = ({ product, onAddToCart }) => {
  return (
    <div className='card-product'>
        <section id='img-product'>
        <img src={product.img} alt={product.title}  />
      </section>
      <section id='text-product'>
        <div className='inf-product'>
        <p className='title-product'>{product.title}</p>
        <p className='price-product'>{product.price} P</p>
        </div>
        <div className='inf-product'>
            <div className='rank-product'>
                <img src={star} alt='star-product'></img>
                <p className='rate-product'>{product.rate}</p>
            </div>
          <button   
              onClick={() => {onAddToCart(product.id); window.location.reload();}}> 
              Купить
          </button>
        </div>
      </section>
    </div>
  );
};

export default CardProduct;