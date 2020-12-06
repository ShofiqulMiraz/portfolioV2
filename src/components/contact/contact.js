// importing dependencies
// -----------------------

import "./contact.css";
import facebook from "./../../images/social-contact/facebook.svg";
import twitter from "./../../images/social-contact/twitter.svg";
import instagram from "./../../images/social-contact/instagram.svg";
import github from "./../../images/social-contact/github-sign.svg";
import linkedin from "./../../images/social-contact/linkedin.svg";
import styled from "styled-components";

// Data with an array of objects
// -----------------------------

// adding styles
// ---------------

const ContactContainer = styled.div`
  padding: 5vh 15px;
  background-color: #80808036;
`;

const ContactTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1875rem;
  color: rgba(0, 0, 0, 0.705);
  font-size: 40px;
  padding-bottom: 30px;
  font-weight: 400;
`;

// rendering components
// ---------------------

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>contact</ContactTitle>
      <div className="social-container">
        <a href="/" className='a'>
          <img className='social-image' src={facebook} alt="facebook" />
        </a>
        <a href="/">
          <img className='social-image' src={twitter} alt="facebook" />
        </a>
        <a href="/">
          <img className='social-image' src={instagram} alt="facebook" />
        </a>
        <a href="/">
          <img className='social-image' src={github} alt="facebook" />
        </a>
        <a href="/">
          <img className='social-image' src={linkedin} alt="facebook" />
        </a>
      </div>
    </ContactContainer>
  );
};

export default Contact;
