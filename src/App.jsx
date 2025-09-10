import React from 'react'
import Navbar from "./Component/Navbar/Navbar"
import Hero from "./Component/Hero/Hero"
import Program from "./Component/Program/Program"
import Title from "./Component/Title/Title"
import About from "./Component/About/About"
import Campus from "./Component/Campus/Campus"
import Testimonials from "./Component/Testimonnial/Testimonials"
import Contact from "./Component/Contact/Contact"
import Footer from "./Component/Footer/Footer"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      
      <div className="Container">
        <Title  title="Our Program" subtitle="What we offer"/>
    <Program/>
    <About/>
     <Title  title="GALLERY" subtitle="CAMPUS PHOTO"/>
     <Campus/>
        <Title  title="testimonials" subtitle="student's word"/>
        <Testimonials/>
             <Title  title="CONTACT US" subtitle="GET IN TOUCH"/>
             <Contact/>
             
      </div>
      <Footer/>
    </div>
  )
}

export default App