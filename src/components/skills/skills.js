// importing dependencies
// -----------------------

import styled from "styled-components";
import javascript from "./../../images/skill-icons/javascript.svg";
import react from "./../../images/skill-icons/react.svg";
import redux from "./../../images/skill-icons/redux.svg";
import nodejs from "./../../images/skill-icons/nodejs.svg";
import mongodb from "./../../images/skill-icons/mongodb.svg";
import expressjs from "./../../images/skill-icons/expressjs.svg";
import git from "./../../images/skill-icons/git.svg";
import github from "./../../images/skill-icons/github.svg";
import skillbg from "./../../images/skill-icons/skill-bg.svg";

// Data with an array of objects
// -----------------------------

const skills = [
  {
    image: `${javascript}`,
    name: "Javascript",
  },
  {
    image: `${react}`,
    name: "React Js",
  },
  {
    image: `${redux}`,
    name: "Redux",
  },
  {
    image: `${nodejs}`,
    name: "Node Js",
  },
  {
    image: `${expressjs}`,
    name: "Express Js",
  },
  {
    image: `${mongodb}`,
    name: "MongoDB",
  },
  {
    image: `${git}`,
    name: "Git",
  },
  {
    image: `${github}`,
    name: "Github",
  },
];


// adding styles
// ---------------
const SkillContainer = styled.div`
  padding: 5vh 15px;
  background-image: url(${skillbg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const SkillTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1875rem;
  color: rgba(0, 0, 0, 0.705);
  font-size: 40px;
  padding-bottom: 30px;
  font-weight: 400;
`;

const SkillCard = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
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
  padding: 20px;
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

// rendering components
// ---------------------

const Skills = () => {
  return (
    <SkillContainer>
      <SkillTitle> skills </SkillTitle>
      <SkillCard className="skill-cards">
        {skills.map((skill, index) => (
          <Card key={index}>
            <CardImage src={skill.image} alt="skill" />
            <CardTitle> {skill.name} </CardTitle>
          </Card>
        ))}
      </SkillCard>
    </SkillContainer>
  );
};

export default Skills;
