
import './Footer.scss'; 
import { Link, NavLink } from 'react-router-dom'; 
import lang from '../../assets/lang.png'
import vk from '../../assets/VK.svg'
import tg from '../../assets/Telegram.svg'
import wats from '../../assets/Whatsapp.svg'

export const Footer = () => { 
 
  return ( 
    <div className='container'>
    <div className="footer"> 
      <div className='logo'> QPICK</div>
      <div className='info'>
        <p>Избранное</p> 
        <p>Корзина</p> 
        <p>Контакты</p> 
        </div>
        <div className='lang'>
            <p>Условия сервиса</p>
                <div className='icons'>
                    <img src={lang} alt='lang'></img>
                    <p className='rus'>Рус</p>
                    <p className='eng'>Eng</p>
                    
                </div>
            </div>
      <div className='links'> 
        <img src={vk} alt='vk'></img>
        <img src={tg} alt='tg'></img>
        <img src={wats} alt='wats'></img>
      </div>
    </div> 
    </div>
  ); 
};