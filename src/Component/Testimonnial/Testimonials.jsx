import React,{useRef} from 'react'
import{Element} from "react-scroll"

import "./Testimonials.css"
import next_icon  from '../../assets/next-icon.png'
import back_icon  from '../../assets/back-icon.png'
import user_1  from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3  from '../../assets/user-3.png'
import user_4  from '../../assets/user-4.png'



const Testimonials = () => {
const Slider=useRef()
let  tx=0

const slideforward=()=>{
if(tx>-50){
  tx -=25;
}
Slider.current.style.transform=`translateX(${tx}%)`
  }
    const slidebackward=()=>{
  if(tx<0){
  tx +=25;
}
Slider.current.style.transform=`translateX(${tx}%)`
  }
  return (
    
    <Element className='Testimonials' name='Testimonials'> 
<img src={next_icon} className='next-icon' onClick={slideforward} alt="" />
<img src={back_icon} className='back-icon' onClick={slidebackward} alt="" />
  <div className='Slider'>
    <ul ref={Slider}>
      <li>
       <div className='Slide'>
         <div className='user-info'>
            <img src={user_1} alt="" />
            <div> 
              <h3>Willium Jackson1</h3>
              <span>Edusity,USA</span>
            </div>
           
        </div>
         <p>Choosing to pursue my degree at Edusity was one of
               the best decisions I've ever made. The supportive to
                academic excellence have truly exceeded my community,
                 state-of-the-art facilities, and commitment expectations.</p>
       </div>
        </li>
        <li>
       <div className='Slide'>
         <div className='user-info'>
            <img src={user_2} alt="" />
            <div> 
              <h3>Willium Jackson2</h3>
              <span>Edusity,USA</span>
            </div>
        </div>
          <p>Choosing to pursue my degree at Edusity was one of
               the best decisions I've ever made. The supportive to
                academic excellence have truly exceeded my community,
                 state-of-the-art facilities, and commitment expectations.</p>
       </div>
        </li>
        <li>
       <div className='Slide'>
         <div className='user-info'>
            <img src={user_3} alt="" />
            <div> 
              <h3>Willium Jackson3</h3>
              <span>Edusity,USA</span>
            </div>
        </div>
          <p>Choosing to pursue my degree at Edusity was one of
               the best decisions I've ever made. The supportive to
                academic excellence have truly exceeded my community,
                 state-of-the-art facilities, and commitment expectations.</p>
       </div>
        </li>
        <li>
       <div className='Slide'>
         <div className='user-info'>
            <img src={user_4} alt="" />
            <div>  
              <h3>Willium Jackson4</h3>
              <span>Edusity,USA</span>
            </div>
        </div>
         <p>Choosing to pursue my degree at Edusity was one of
               the best decisions I've ever made. The supportive to
                academic excellence have truly exceeded my community,
                 state-of-the-art facilities, and commitment expectations.</p>
       </div>
        </li>
    </ul>
  </div>
    </Element>
  )
}

export default Testimonials