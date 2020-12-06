// importing dependencies
// -----------------------

import styled from "styled-components";

// adding styles
// ---------------
const FooterContainer = styled.footer`
  background-color: #000000e6;
  height: 5vh;
`;

const FooterPara = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

// rendering components
// ---------------------

const Footer = () => {
  return (
    <FooterContainer>
      <FooterPara>Designed &amp; Developed By &copy;Shofiqul</FooterPara>
    </FooterContainer>
  );
};

export default Footer;
