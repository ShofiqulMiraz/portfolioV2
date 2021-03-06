import styled from "styled-components";
import skillbg from "./assets/skill-bg.svg";

export const SkillContainer = styled.div`
  padding: 5vh 15px;
  background-image: url(${skillbg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SkillTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1875rem;
  color: rgba(0, 0, 0, 0.705);
  font-size: 40px;
  padding-top: 30px;
  padding-bottom: 30px;
  font-weight: 400;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, #7ed56f, #28b485);
`;

export const SkillCard = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 30px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #c2e9fb;
  padding: 20px;
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
