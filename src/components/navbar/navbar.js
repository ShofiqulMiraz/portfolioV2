import logo from "./assets/logo-white.png";
import menuopen from "./assets/menu.svg";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Logo,
  MenuLinks,
  MenuList,
  MenuOpen,
  NavContainer,
} from "./navbar.style";

const NavBar = () => {
  const history = useHistory();
  const [mobilemenuopen, setmobilemenuopen] = useState(false);
  const MenuShow = () => (
    <>
      <MenuList>
        <MenuLinks onClick={() => setmobilemenuopen(false)}>
          <Link to="/">home</Link>
        </MenuLinks>
        <MenuLinks onClick={() => setmobilemenuopen(false)}>
          <Link to="/services">service</Link>
        </MenuLinks>
        <MenuLinks onClick={() => setmobilemenuopen(false)}>
          <Link to="/skills">skills</Link>
        </MenuLinks>
        <MenuLinks onClick={() => setmobilemenuopen(false)}>
          <Link to="/portfolio">portfolio</Link>
        </MenuLinks>
        <MenuLinks onClick={() => setmobilemenuopen(false)}>
          <Link to="/contact">contact</Link>
        </MenuLinks>
      </MenuList>
    </>
  );
  return (
    <>
      <NavContainer>
        <Logo
          src={logo}
          alt="logo"
          onClick={() => {
            history.push("/");
            setmobilemenuopen(false);
          }}
        />
        <MenuOpen
          src={menuopen}
          alt="logo"
          onClick={() => setmobilemenuopen(true)}
        />
        {mobilemenuopen && <MenuShow />}
      </NavContainer>
    </>
  );
};

export default NavBar;
