import { skills } from "./skills.data";
import {
  SkillContainer,
  SkillTitle,
  SkillCard,
  Card,
  CardImage,
  CardTitle,
} from "./skills.style";

// rendering components
// ---------------------

const Skills = () => {
  return (
    <SkillContainer>
      <SkillTitle> skills </SkillTitle>
      <SkillCard>
        {skills.map((skill, index) => (
          <Card key={index}>
            <CardImage src={skill.image} alt={`skill-${index}`} />
            <CardTitle> {skill.name} </CardTitle>
          </Card>
        ))}
      </SkillCard>
    </SkillContainer>
  );
};

export default Skills;
