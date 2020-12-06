// importing dependencies
// -----------------------

import nexter from "./../../images/portfolio-projects/nexter.png";
import natours from "./../../images/portfolio-projects/natours.png";
import trillo from "./../../images/portfolio-projects/trillo.png";
import styled from "styled-components";

// Data with an array of objects
// -----------------------------

const projects = [
  {
    image: `${nexter}`,
    name: "nexter",
    website: "https://nexter-shofiqul.netlify.app",
  },
  {
    image: `${natours}`,
    name: "natours",
    website: "https://natours-shofiqul.netlify.app",
  },
  {
    image: `${trillo}`,
    name: "trillo",
    website: "https://trillo-shofiqul.netlify.app",
  },
];

// adding styles
// ---------------

const PortfolioContainer = styled.div`
  padding: 5vh 15px;
  background-color: #80808036;
`;

const PortfolioTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1875rem;
  color: rgba(0, 0, 0, 0.705);
  font-size: 40px;
  padding-bottom: 30px;
  font-weight: 400;
`;

const PortfolioCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
`;

const PortfolioButton = styled.a`
  text-decoration: none;
`;

const PortfolioImageOverlay = styled.div`
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

const ImageContainer = styled.div`
  position: relative;
  &:hover ${PortfolioImageOverlay} {
    height: 100%;
  }
`;

const PortfolioImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const PortfolioProjectName = styled.div`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

// rendering components
// ---------------------

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioTitle>portfolio</PortfolioTitle>
      <PortfolioCard>
        {projects.map((project, index) => (
          <PortfolioButton
            href={project.website}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageContainer>
              <PortfolioImage src={project.image} alt="Avatar" />
              <PortfolioImageOverlay>
                <PortfolioProjectName> {project.name} </PortfolioProjectName>
              </PortfolioImageOverlay>
            </ImageContainer>
          </PortfolioButton>
        ))}
      </PortfolioCard>
    </PortfolioContainer>
  );
};

export default Portfolio;
