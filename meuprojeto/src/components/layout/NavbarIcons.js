import "./NavbarIconsStyle.css";
import Container from "./Container";
import {
  FaFacebook,
  FaInstagram,
  FaDiscord,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

function NavbarIcons({ customClass }) {
  function showName() {
    console.log("oi");
  }

  return (
    <nav className={`iconsNav ${customClass}`}>
      <Container customClass="backgroundIcon">
        <FaFacebook onMouseEnter={showName}></FaFacebook>
        <FaInstagram></FaInstagram>
        <FaPinterest></FaPinterest>
        <FaDiscord></FaDiscord>
        <FaTwitter></FaTwitter>
      </Container>
      <div className="image"></div>
    </nav>
  );
}

export default NavbarIcons;
