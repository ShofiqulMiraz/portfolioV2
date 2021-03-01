import styled from "styled-components";

export const ServiceSection = styled.div`
  padding: 5vh 15px;
  background-color: #b1b3b345;
`;

export const ServiceTitle = styled.h1`
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

export const ServiceCard = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  @media only screen and (max-width: 290px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
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
  }
`;

export const CardImage = styled.img`
  height: 80px;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 5px;
  font-weight: 400;
  color: #212529;
`;

export const CardDescription = styled.p`
  color: #212529;
  font-size: 14px;
`;
