import React, { useState, useEffect } from 'react';
import './CSS/Enquiry.css';

const Enquiry = () => {
  // Define state variables to store form input values
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [enquiryMessage, setEnquiryMessage] = useState('');

  // Trigger a pop-up message when the component mounts
  useEffect(() => {
    alert('काही प्रश्न असल्यास कृपया फॉर्म भरा');
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (fullName && phone && enquiryMessage) {
      // Create a WhatsApp message using template literals
      const whatsappMessage = `Name: ${fullName}Phone: ${phone} Email: ${email} Enquiry: ${enquiryMessage}`;

      // Create the WhatsApp link with the message
      const whatsappUrl = `https://wa.me/919325323956?text=${encodeURIComponent(whatsappMessage)}`;

      // Open the WhatsApp link in a new tab
      window.open(whatsappUrl, '_blank');
    } else {
      alert('Please fill out all required fields.');
    }
  };

  return (
    <div className="main-container">
      <div className="enquiry-form-container">
        <h2>ENQUIRY FORM</h2>
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <div className="input-row">
            <input
              type="text"
              placeholder="Enter Phone No."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <textarea
            placeholder="Enter Enquiry"
            value={enquiryMessage}
            onChange={(e) => setEnquiryMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;
