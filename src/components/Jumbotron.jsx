import React from 'react'
import Iphone from '../assets/images/iphone-14.jpg'

const Jumbotron = () => {
  return (
    <div className='jumbotron-section wrapper'>
      <h2 className="title">
        New
        <img className='logo' src={Iphone} alt="iphone" />
        <p className="text">~</p>
      </h2>
    </div>
  )
}

export default Jumbotron
