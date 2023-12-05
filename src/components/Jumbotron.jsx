import React from 'react';
import Iphone from '../assets/images/iphone-14.jpg';
import IphoneHand from '../assets/images/iphone-hand.png';
import { left } from 'webgi';

const Jumbotron = () => {

const handleLearnMore = () => {
  const element = document.querySelector(".sound-section");
  window.scrollTo({
    top: element?.getBoundingClientRect().top,
    left: 0,
    behavior: 'smooth'
  })
}

  return (
    <div className='jumbotron-section wrapper'>
      <h2 className="title">
        New
      </h2>
        <img className='logo' src={Iphone} alt="iphone" />
        <p className="text">Big and bigger</p>
        <span className="description">
          Form $41.62/mo. for 24 mo. or $999 before trading
        </span>
        <ul className="links">
          <li>
            <button className='button'>Buy</button>
          </li>
          <li>
            <a  onClick={handleLearnMore} className='link'> Learn More</a>
          </li>
        </ul>
        <img src={IphoneHand} alt="" className="iphone-img" />
    </div>
  )
}

export default Jumbotron
