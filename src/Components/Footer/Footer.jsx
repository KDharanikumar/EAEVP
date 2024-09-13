import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import FooterLogo from "../../Images/Candidate.jpg";
import './Footer.css';


const Footer = () => {
  return (
    <footer>
      <section className="top">
        <ul>
          <li className='footer-logo'>
            <img src={FooterLogo} alt="Logo" />
          </li>
          <li>
            <h3>Quick Links</h3>
            <Link to="###">Home</Link>
            <Link to="###">About Us</Link>
            <Link to="###">Our Services</Link>
            <Link to="###">Contact Us</Link>
          </li>
          <li>
            <h3>Tools</h3>
            <Link to="###">Faqs</Link>
            <Link to="###">Career</Link>
            <Link to="###">Announces</Link>
          </li>

          <li>
            <h3>Contact Us</h3>
            <div>
              <p className='text-white'>No.179 Down Street<br />
                New York<br />
                XXXXXXXXXX<br />
                USA-600 096<br />
              </p>
              <Link to="tel:+918050341414">Phone: +91 80503 41414</Link>
              <Link to="mailto:contact@avia.co.in">Email: contact@avia.co.in</Link>
            </div>
          </li>
          <li>
            <h3>Follow Us On</h3>
            <div className="social-icon d-flex gap-3">
              <Link to="https://www.facebook.com"><FaFacebook className='icon' /></Link>
              <Link to="https://twitter.com"><FaTwitter className='icon' /></Link>
              <Link to="https://www.instagram.com"><FaInstagram className='icon' /></Link>
              <Link to="https://www.linkedin.com"><FaLinkedin className='icon' /></Link>
            </div>
          </li>
        </ul>
      </section>
      <section className="bottom d-flex flex-wrap justify-content-around">
        <Link to="/" className='text-white'>© 2024 XXX. All Rights Reserved.</Link>
      </section>
    </footer>
  );
}

export default Footer;
