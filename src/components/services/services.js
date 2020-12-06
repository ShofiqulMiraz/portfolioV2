// importing dependencies
// -----------------------
import styled from "styled-components";
import webdesign from "./../../images/service-icon/web-design.svg";
import webdevelopment from "./../../images/service-icon/web-development.svg";
import support from "./../../images/service-icon/call-center-agent.svg";
import responsive from "./../../images/service-icon/responsive-design.svg";
import fasttech from "./../../images/service-icon/fastest-tech.svg";
import seofriendly from "./../../images/service-icon/seo-friendly.svg";

// Data with an array of objects
// -----------------------------
const services = [
  {
    title: "WEB DESIGN",
    description: "Get Your Website Design Frame With Modern Design Pattern",
    image: `${webdesign}`,
  },
  {
    title: "WEB DEVELOPMENT",
    description: "Get Your Website Developed From Scratch With Zero Stress",
    image: `${webdevelopment}`,
  },
  {
    title: "24/7 SUPPORT",
    description: "Get Support 24 Hours In A Day, 7 Days In A Week",
    image: `${support}`,
  },
  {
    title: "100% RESPONSIVE",
    description:
      "Get Mobile-First Cross-Browser And Cross-Device Compatible Website",
    image: `${responsive}`,
  },
  {
    title: "FASTEST TECH STACK",
    description:
      "Get Developed With MERN, Fastest Technology Stack On Planet Earth",
    image: `${fasttech}`,
  },
  {
    title: "SEO FRIENDLY",
    description: "Get Seo Friendly Website For Your Business Growth",
    image: `${seofriendly}`,
  },
];

// adding styles
// --------------

const ServiceSection = styled.div`
  padding: 5vh 15px;
  background-color: #b1b3b345;
`;

const ServiceTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1875rem;
  color: rgba(0, 0, 0, 0.705);
  font-size: 40px;
  padding-bottom: 30px;
  font-weight: 400;
`;

const ServiceCard = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  @media only screen and (max-width: 290px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 3px solid #c2e9fb;
  background-color: #c2e9fb;
  padding: 30px;
  &:hover {
    border: 3px solid transparent;
    border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 5s infinite linear%3B%7D%40keyframes stroke%7Bto%7Bstroke-dashoffset:776%3B%7D%7D%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%232d3561' /%3E%3Cstop offset='25%25' stop-color='%23c05c7e' /%3E%3Cstop offset='50%25' stop-color='%23f3826f' /%3E%3Cstop offset='100%25' stop-color='%23ffb961' /%3E%3C/linearGradient%3E %3Cpath d='M1.5 1.5 l97 0l0 97l-97 0 l0 -97' stroke-linecap='square' stroke='url(%23g)' stroke-width='3' stroke-dasharray='388'/%3E %3C/svg%3E")
      1;
  }
`;

const CardImage = styled.img`
  height: 80px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 5px;
  font-weight: 400;
  color: #212529;
`;

const CardDescription = styled.p`
  color: #212529;
  font-size: 14px;
`;

// rendering components
// ---------------------

const Services = () => {
  return (
    <ServiceSection>
      <ServiceTitle>services</ServiceTitle>
      <ServiceCard>
        {services.map((service, index) => (
          <Card key={index}>
            <CardImage src={service.image} alt="service" />
            <CardTitle> {service.title} </CardTitle>
            <CardDescription> {service.description} </CardDescription>
          </Card>
        ))}
      </ServiceCard>
    </ServiceSection>
  );
};

export default Services;
