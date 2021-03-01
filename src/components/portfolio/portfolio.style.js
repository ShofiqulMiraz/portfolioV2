import styled from "styled-components";

export const PortfolioContainer = styled.div`
  padding: 5vh 15px;
  background-color: #80808036;
`;

export const PortfolioTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1875rem;
  color: rgba(0, 0, 0, 0.705);
  font-size: 40px;
  padding-bottom: 30px;
  font-weight: 400;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, #7ed56f, #28b485);
`;

export const PortfolioCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
`;

export const PortfolioButton = styled.a`
  text-decoration: none;
`;

export const PortfolioImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #272927b3;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
`;

export const ImageContainer = styled.div`
  position: relative;
  &:hover ${PortfolioImageOverlay} {
    height: 100%;
  }
`;

export const PortfolioImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const PortfolioProjectName = styled.div`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
