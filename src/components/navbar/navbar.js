import logo from "./assets/logo-white.png";
import menuopen from "./assets/menu.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Logo,
  MenuLinks,
  MenuList,
  MenuOpen,
  NavContainer,
} from "./navbar.style";

const NavBar = () => {
  const [mobilemenuopen, setmobilemenuopen] = useState(false);
  const MenuShow = () => (
    <>
      <MenuList>
        <MenuLinks onClick={() => setmobilemenuopen(!mobilemenuopen)}>
          <Link to="/">home</Link>
        </MenuLinks>
        <MenuLinks onClick={() => setmobilemenuopen(!mobilemenuopen)}>
          <Link to="/service">service</Link>
        </MenuLinks>
        <MenuLinks onClick={() => setmobilemenuopen(!mobilemenuopen)}>
          <Link to="/skills">skills</Link>
        </MenuLinks>
        <MenuLinks onClick={() => setmobilemenuopen(!mobilemenuopen)}>
          <Link to="/portfolio">portfolio</Link>
        </MenuLinks>
        <MenuLinks onClick={() => setmobilemenuopen(!mobilemenuopen)}>
          <Link to="/contact">contact</Link>
        </MenuLinks>
      </MenuList>
    </>
  );
  return (
    <>
      <NavContainer>
        <Logo src={logo} alt="logo" />
        <MenuOpen
          src={menuopen}
          alt="logo"
          onClick={() => setmobilemenuopen(!mobilemenuopen)}
        />
        {mobilemenuopen && <MenuShow />}
      </NavContainer>
    </>
  );
};

export default NavBar;
