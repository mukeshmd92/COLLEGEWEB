import React, { useEffect,useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import menu_icon from "../../assets/menu-icon.png"
import {Link} from 'react-scroll'
const Navbar = () => {
const [sticky, setsticky]=useState(false)
useEffect(()=>{
   const handleScroll = () => {
    window,scrollY>700?setsticky(true):setsticky(false)
   }
 window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
const[mobilemenu,setMobilemenu]=useState(false)
// const togglemenu=()=>{
//   setMobilemenu(!mobilemenu)
// }
  return (
    <nav className={`Container ${sticky?'dark-nav' :'' } `}>
        <img className='logo' src={logo} alt="" />
        <ul className={mobilemenu?"":"mobile-menu"}>
            <li><Link to='hero' smooth={true} offset={-1700} duration={500}
            >Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-230}duration={500}
             >Program</Link></li>
            <li><Link to='About' smooth={true} offset={-100} duration={500}
             >About Us</Link></li>
            <li><Link to='gallery' smooth={true} offset={-280}duration={500}
             >Campus</Link></li>
            <li><Link to='Testimonials' smooth={true} offset={-230} duration={500}
             >Testimonials</Link></li>
            <li  className='btn' ><Link to='Contact' smooth={true} offset={-230} duration={500}
             >Contact us</Link></li>
        </ul>
        <div className='threest' >
          <img className='menu-icon' onClick={()=>{setMobilemenu(!mobilemenu)}} src={menu_icon}  alt="" />
        </div>
        
    </nav>
  )
}

export default Navbar