import { socials } from "./contact.data";
import {
  ContactContainer,
  ContactTitle,
  SocialContainer,
  SocialLinks,
  SocialImage,
} from "./contact.style";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>contact</ContactTitle>
      <SocialContainer>
        {socials.map((social, index) => (
          <SocialLinks href={social.url} key={index} target="_blank">
            <SocialImage src={social.image} alt={social.name} />
          </SocialLinks>
        ))}
      </SocialContainer>
    </ContactContainer>
  );
};

export default Contact;
