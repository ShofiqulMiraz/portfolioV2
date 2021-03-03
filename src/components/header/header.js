import profilePic from "./assets/profilePic.jpg";
import Services from "../services/services";
import Skills from "../skills/skills";
import Portfolio from "../portfolio/portfolio";
import Contact from "../contact/contact";
import {
  CtaButton,
  HeaderContainer,
  Profession,
  ProfileImage,
  Title,
  DownloadCV,
  ContactMe,
} from "./header.style";

// rendering components
// ---------------------

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <ProfileImage src={profilePic} alt="profilepicture" />
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
