import "./NavbarIconsStyle.css";
import Container from "./Container";
import {
  FaFacebook,
  FaInstagram,
  FaDiscord,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { useState } from "react";

function NavbarIcons({ customClass }) {
  const [name, setName] = useState();

  const showName = (e) => {
    setName(e.target.id);
    console.log(name);
  };

  // const hiddenName = (e) => {};

  return (
    <nav className={`iconsNav ${customClass}`}>
      <Container customClass="backgroundIcon">
        <FaFacebook onMouseEnter={showName} id="Facebook"></FaFacebook>
        <FaInstagram onMouseEnter={showName} id="Instragram"></FaInstagram>
        <FaPinterest onMouseEnter={showName} id="Pinterest"></FaPinterest>
        <FaDiscord onMouseEnter={showName} id="Discord"></FaDiscord>
        <FaTwitter onMouseEnter={showName} id="Twitter"></FaTwitter>
        
      </Container>
      <div className="image"></div>
    </nav>
  );
}

export default NavbarIcons;
