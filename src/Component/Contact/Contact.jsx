import React from 'react'
import{Element} from "react-scroll"
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import "./Contact.css"

const Contact = () => {
   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3bbe51b0-4674-444f-bebc-aaf7e735a9e7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <Element className='Contact' name='Contact'>
<div className="contact-col">
    <h3>Send Us a Message <img src={msg_icon} alt="" /> </h3>
    <p>Feel Freeto reach out through contact from or find 
        our contact information below . your feedback question 
        ,and suggestions are important to us we strive to provide 
        exceptional service to our university community</p>
        <ul>
            <li><img src={mail_icon} alt="" />dasm57306@gmail.com</li>
            <li><img src={phone_icon} alt="" />+91-784 6896259</li>
            <li><img src={location_icon} alt="" />Badaraghunathpur,gohiria squre, Bhubaneswer,Odisha, India</li>

        </ul> 

</div>
<div className="contact-col">
  <form onSubmit={onSubmit}>
    <label>NAME</label>
    <input type="text" name='name' placeholder='Enter your name' required />
     <label>PHONE NO</label>
    <input type="tel" name='phone' placeholder='Enter  your mobile number' required />
     <label>WRITE YOUR MESSAGE</label>
<textarea name="message" id="" cols="30" rows="10" placeholder='Enter your message'></textarea>
<button type='submit' onSubmit={onSubmit} className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
  </form>
  <span>{result}</span>
</div>
    </Element>
  )
}

export default Contact 
// 1:54:16