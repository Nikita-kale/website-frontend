import React from 'react'
import './PersonalInfo.css'
import firstweb from  '../Assests/firstweb.jpg'
import whatsapp from '../Assests/whatsapp.png'
import call from '../Assests/call.png'
import mail from '../Assests/mail1.jpg'
import direction from '../Assests/direction.jpg'
import { Link } from 'react-router-dom';

const PersonalInfo = () => {
  return (
    <div className='container'>
      <div className='photo'>
         <img src={firstweb} alt="" />
         <h1>SUVARNAYOG VADHU-VAR NONDANI KENDRA</h1>
         <h4>(Kotharud, Pune)</h4>
         <hr />
      </div>
      <div className="name">
        <h2>Mrs.Vaishali Vijay Rakhunde</h2>
        <h3>(Relationship Consultant)</h3>
      </div>

      <div className="sub-container">
        <ul className="info-link">

        
  <a  className='call-logo' href="tel:+919325323956">
    <img src={call} alt="Phone" /> Call
  </a>

<a  className='whatsapp-logo' href={`https://wa.me/919325323956?text=${encodeURIComponent('Hello, I would like to know more about your services.')}`} target="_blank" rel="noopener noreferrer">
<img src={whatsapp} alt="WhatsApp" /> WhatsApp
</a>

  <Link className='whatsapp-logo' to="/address">
    <img src={direction} alt="Direction" /> Direction
  </Link>

<Link  className='mail-logo' to="/mail" >
    <img src={mail} alt="" />Mail
</Link>
   </ul>
</div>

      <div className='lower'>
          <p>Address: Yashwantrao Chavan buliding, Kotharud Pune</p>
          <p>Email: suvarnayog708@gmail.com</p>
          <a href='https://jeevanmeet.com/'>Link: Jeevanmeet Official Website</a> <br />
          <a href="tel:+91-9325323956">Call: +91-9325323956/+91-9422190548</a>
      </div>
    </div>

  )
}

export default PersonalInfo
