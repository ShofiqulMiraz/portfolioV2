import { projects } from "./portfolio.data";
import {
  PortfolioContainer,
  PortfolioTitle,
  PortfolioCard,
  PortfolioButton,
  ImageContainer,
  PortfolioImage,
  PortfolioImageOverlay,
  PortfolioProjectName,
} from "./portfolio.style";

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
