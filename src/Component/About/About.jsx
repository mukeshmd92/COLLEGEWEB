import React from 'react'
import "./About.css"
import{Element} from "react-scroll"
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <Element className='About' name="About">
        <div className="about-left">
<img src={about_img} className='About-img' alt="" />
<img src={play_icon}className='Play-icon'  alt="" />
        </div>
        <div className="about-right">
<h3>ABOUT UNIVERSITY</h3>
<h2>Nurturing Tomorrow's Leading Today</h2>
<p>Embark on a Transformative educational journey with our University's Compresive education Program . Our  Cutting-edge Pcuriculum Is dESIGNED tO Empower Students With The Knowage ,Skills,and Experience Needed To Excel In the Dynamic Field of education </p>
<p>With a FOCUS  ON iNNOVATION ,Hand-on Learning ,and Personalized   Mentorship , Our Program Prepare as pare aspiring educators to make a meaning ful impact in classroom,school and communicaties</p>
<p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>
    </Element>
  )
}

export default About