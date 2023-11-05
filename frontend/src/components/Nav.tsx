import React from 'react';
// import { Link } from 'react-router-dom';

import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";


const Nav:React.FC = () => {
  return (
    <nav className = ' flex items-center justify-between ' >
      <div className = 'flex' >
        <header>
            <h1> sneakers </h1>
        </header>
        
        <div className = ' flex ' >
            <a href = "/" > Collections </a>
            <a href = "/" > Men </a>
            <a href = "/" > Women </a>
            <a href = "/" > About </a>
            <a href = "/" > Contact </a>   
        </div>
      </div>

      <div className = 'flex items-center ' >
        <div> <img src = { cart } alt="" /> </div>
        <div> <img src = { avatar }  alt="" /> </div>
      </div>
    </nav>
  )
}

export default Nav
