import logo from "./assets/logo-white.png";
import menuopen from "./assets/menu.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [mobilemenuopen, setmobilemenuopen] = useState(false);
  const MenuShow = () => (
    <>
      <ul className="menu-list">
        <li
          className="menu-links"
          onClick={() => setmobilemenuopen(!mobilemenuopen)}
        >
          <Link to="/">home</Link>
        </li>
        <li
          className="menu-links"
          onClick={() => setmobilemenuopen(!mobilemenuopen)}
        >
          <Link to="/service">service</Link>
        </li>
        <li
          className="menu-links"
          onClick={() => setmobilemenuopen(!mobilemenuopen)}
        >
          <Link to="/skills">skills</Link>
        </li>
        <li
          className="menu-links"
          onClick={() => setmobilemenuopen(!mobilemenuopen)}
        >
          <Link to="/portfolio">portfolio</Link>
        </li>
        <li
          className="menu-links"
          onClick={() => setmobilemenuopen(!mobilemenuopen)}
        >
          <Link to="/contact">contact</Link>
       
        </li>
      </ul>
    </>
  );
  return (
    <>
      <nav className="navcontainer">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menubtn">
          <img
            src={menuopen}
            alt="logo"
            onClick={() => setmobilemenuopen(!mobilemenuopen)}
          />
          {mobilemenuopen && <MenuShow />}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
