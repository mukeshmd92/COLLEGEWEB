import React from 'react'
import{Element} from "react-scroll"
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <Element className='hero Container'  name='hero'>
        <div className="hero-text">
            <h1>We Ensure you better education for a better world</h1>
            <p>Our Cuttng-edge curriculum is deigned to empower students with the knowage skkills and eperience needed to excel in the dynamic field of education</p>
        <button className='btn'> Explore More <img src={dark_arrow}alt="" /> </button>
        </div>
    </Element>
  )
}

export default Hero