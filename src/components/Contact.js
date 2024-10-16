import React, { useState } from 'react';
import '../styles/Contact.css'; // CSS file for styling
import emailjs from 'emailjs-com';

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, // Replace with your EmailJS Service ID
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS Template ID
      e.target,
      process.env.REACT_APP_EMAILJS_USER_ID // Replace with your EmailJS User ID
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      }, (error) => {
        console.log('Email send error:', error.text);
      });
  };

  return (
    <div className="contact-container" id='contact'>
      {/* Contact Form Section */}
      <div className="contact-form">
        <h2>Get In Touch</h2>
        <form onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name}
            onChange={handleChange}
            required placeholder="First_Name Last_Name" />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email Address" />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"></textarea>

          <button type="submit">Send</button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info">
        <h4>Contact Information</h4>
        <p><i className="fas fa-map-marker-alt"></i> Cambrian College, 1400 Barrydown, Sudbury, Canada</p>
        <p><i className="fas fa-phone"></i> +1 249 979 4278</p>
        <p><i className="fas fa-envelope"></i> sushan.thapa01010@gmail.com</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-snapchat"></i></a>
        </div>
        {/* Google Maps iframe */}
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2844.1551852497756!2d-81.03359918404143!3d46.48269557911435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4c1b88378a747ad7%3A0x6cde1642b329cc1c!2sCambrian%20College!5e0!3m2!1sen!2sng!4v1633686474137!5m2!1sen!2sng"
          width="300"
          height="200"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
