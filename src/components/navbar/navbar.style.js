import styled from "styled-components";

export const NavContainer = styled.nav`
  padding: 1vh 15px;
  display: flex;
  justify-content: space-between;
  background-color: #262626;
  position: fixed;
  width: 100%;
  z-index: 100;
`;

export const Logo = styled.img`
  max-height: 32px;
  cursor: pointer;
`;

export const MenuOpen = styled.img`
  max-height: 29px;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(289deg)
    brightness(108%) contrast(105%);
  cursor: pointer;
  padding-top: 7px;
`;

export const MenuList = styled.ul`
  list-style: none;
  background-color: #fff;
  position: fixed;
  width: 30vh;
  height: 100vh;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;

export const MenuLinks = styled.li`
  a {
    text-transform: uppercase;
    cursor: pointer;
    font-size: 18px;
    text-decoration: none;
    color: #000;
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
