// importing dependencies
// -----------------------
import styled from "styled-components";
import profilePic from "./../../images/logo/profilePic.jpg";
import headerbackground from "./../../images/header/portfolio-header-bg.svg";
import { Link } from "react-router-dom";
import Services from "../services/services";
import Skills from "../skills/skills";
import Portfolio from "../portfolio/portfolio";
import Contact from "../contact/contact";

// adding styles
// ---------------

const HeaderContainer = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.85) 100%
    ),
    url(${headerbackground});

  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ProfileImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 80px;
  border: 6px solid white;
`;

const Title = styled.h2`
  font-size: 30px;
  text-transform: capitalize;
  color: white;
  margin: 10px 0;
  font-weight: 500;
  @media only screen and (max-width: 480px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 360px) {
    font-size: 23px;
  }
`;
const Profession = styled.h3`
  font-size: 25px;
  color: white;
  margin: 0;
  font-weight: 300;
  @media only screen and (max-width: 480px) {
    font-size: 23px;
  }
  @media only screen and (max-width: 360px) {
    font-size: 20px;
  }
`;

const CtaButton = styled.div`
  display: flex;
  margin-top: 20px;
  @media only screen and (max-width: 370px) {
    flex-direction: column;
  }
`;

const DownloadCV = styled.a`
  position: relative;
  text-decoration: none;
  border: none;
  outline: none;
  font-weight: 500;
  padding: 10px 30px;
  border-radius: 5px;
  color: #fff;
  margin-right: 20px;
  text-transform: uppercase;
  transition: all 500ms ease-in-out;
  cursor: pointer;
  border: 1px solid #fff;
  &:before {
    right: 0;
  }
  &:after {
    left: 0;
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    transition: inherit;
    z-index: -1;
    top: 0;
    width: 0;
    height: 100%;
  }

  &:hover {
    color: #000;
    transition-delay: 0.1s;
    &:before {
      transition-delay: 0s;
      width: 100%;
    }
    &:after {
      background: #fff;
      transition-delay: 0.35s;
      width: 100%;
    }
  }
  @media only screen and (max-width: 370px) {
    margin-bottom: 15px;
  }
`;

const ContactMe = styled(Link)`
  position: relative;
  text-decoration: none;
  border: none;
  outline: none;
  font-weight: 500;
  padding: 10px 30px;
  border-radius: 5px;
  color: #fff;
  margin-right: 20px;
  text-transform: uppercase;
  transition: all 500ms ease-in-out;
  cursor: pointer;
  border: 1px solid #fff;
  &:before {
    right: 0;
  }
  &:after {
    left: 0;
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    transition: inherit;
    z-index: -1;
    top: 0;
    width: 0;
    height: 100%;
  }

  &:hover {
    color: #000;
    transition-delay: 0.1s;
    &:before {
      transition-delay: 0s;
      width: 100%;
    }
    &:after {
      background: #fff;
      transition-delay: 0.35s;
      width: 100%;
    }
  }
`;

// rendering components
// ---------------------

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <ProfileImage src={profilePic} alt="profile" />
        <Title>Shofiqul Islam Miraz</Title>
        <Profession> MERN Stack Developer </Profession>
        <CtaButton>
          <DownloadCV href="/"> Download CV </DownloadCV>
          <ContactMe to="/contact">Contact Me</ContactMe>
        </CtaButton>
      </HeaderContainer>
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Header;
