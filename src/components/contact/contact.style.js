import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 5vh 15px;
  background-color: #b9b7b7;
`;

export const ContactTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1875rem;
  color: rgba(0, 0, 0, 0.705);
  font-size: 40px;
  padding-bottom: 30px;
  font-weight: 400;
`;

export const SocialContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 20px;
  justify-items: center;
`;

export const SocialLinks = styled.a`
  text-decoration: none;
`;

export const SocialImage = styled.img`
  height: 50px;
`;
