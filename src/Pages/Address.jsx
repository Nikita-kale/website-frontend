import React from 'react'
import './CSS/Address.css';

const Address = () => {
  return (
    <div>
      <address className='add'>
        Yashwantrao chavhan building <br />
        lane no.1, Dahanukar colony <br />
        Pune-411038
      </address>
      <div className='responsive-map'>
      <iframe
  title="Google Maps Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.880288810649!2d73.81308382065666!3d18.494434690670268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfc382e37595%3A0xebf7e03377f50f43!2s26%2F15%2FA%2C%20Karve%20Rd%2C%20Chandralok%20Nagari%2C%20Dahanukar%20Colony%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411038!5e0!3m2!1sen!2sin!4v1726729548498!5m2!1sen!2sin"
  width="600"
  height="450"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

      </div>
    </div>
  )
}

export default Address
