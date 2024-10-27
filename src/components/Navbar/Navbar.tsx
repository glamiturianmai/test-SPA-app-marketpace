import cart from '../../assets/cart.svg'
import like from '../../assets/like.svg'
import './Navbar.scss'; 
import { getProducts } from '../../pages/data';


export const Navbar = () => { 
  const products = getProducts();
  const totalCount = products.reduce((total, product) => {
    return total + product.count;
    }, 0);


  return ( 
    <div className="navbar"> 
    <a href='/'> <p>QPICK</p> </a>
    <div className="icons">
    <a href='/cart'>
    <div className="image-container">
      <img src={cart} alt='cart'></img>
      <div className="badge">{totalCount}</div>
    </div>
      
    </a>
    <img src={like} alt='like'></img>
    </div> 
    </div>
    
  ); 
};

