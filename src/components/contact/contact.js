// importing dependencies
// -----------------------

import styled from "styled-components";
import facebook from "./../../images/social-contact/facebook.svg";
import twitter from "./../../images/social-contact/twitter.svg";
import instagram from "./../../images/social-contact/instagram.svg";
import github from "./../../images/social-contact/github-sign.svg";
import linkedin from "./../../images/social-contact/linkedin.svg";

// Data with an array of objects
// -----------------------------

const socials = [
  {
    image: `${facebook}`,
    url: "https://facebook.com/ShofiqulMiraz/",
    name: "Facebook",
  },
  {
    image: `${twitter}`,
    url: "https://twitter.com/ShofiqulMiraz",
    name: "twitter",
  },
  {
    image: `${instagram}`,
    url: "https://www.instagram.com/shofiqulmiraz/",
    name: "instagram",
  },
  {
    image: `${github}`,
    url: "https://github.com/ShofiqulMiraz",
    name: "github",
  },
  {
    image: `${linkedin}`,
    url: "https://www.linkedin.com/in/shofiqulmiraz/",
    name: "linkedin",
  },
];

// adding styles
// ---------------

const ContactContainer = styled.div`
  padding: 5vh 15px;
  background-color: #b9b7b7;
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

const SocialContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 20px;
  justify-items: center;
`;

const SocialLinks = styled.a`
  text-decoration: none;
`;

const SocialImage = styled.img`
  height: 50px;
`;
// rendering components
// ---------------------

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>contact</ContactTitle>
      <SocialContainer>
        {socials.map((social, index) => (
          <SocialLinks href={social.url} key={index}>
            <SocialImage src={social.image} alt={social.name} />
          </SocialLinks>
        ))}
      </SocialContainer>
    </ContactContainer>
  );
};

export default Contact;
