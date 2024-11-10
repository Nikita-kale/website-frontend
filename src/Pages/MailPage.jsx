import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './CSS/Mailpage.css';

const MailPage = () => {
  const form = useRef();
  const [popupMessage, setPopupMessage] = useState(''); // State for popup message
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const sendEmail = (e) => {
    e.preventDefault();
    
    const userName = form.current.user_name.value.trim();
    const userEmail = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    // Validation check for empty fields
    if (!userName || !userEmail || !message) {
      alert('Please fill in all the fields before submitting.');
      return; // Stop submission if fields are empty
    }

    emailjs
      .sendForm('service_8g0o5so', 'template_r9p93aa', form.current, {
        publicKey: 'sW_oIi2RrhZoD6hgo',
      })
      .then(
        () => {
          setPopupMessage('Email sent successfully!'); // Set success message
          setShowPopup(true); // Show popup
        },
        (error) => {
          setPopupMessage(`Failed to send email: ${error.text}`); // Set error message
          setShowPopup(true); // Show popup
        },
      );
  };

  // Close the popup after 3 seconds
  if (showPopup) {
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  }

  return (
    <div>
      {/* Popup Message */}
      {showPopup && <div className="popup">{popupMessage}</div>}

      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default MailPage;
