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
  // const hiddenName = (e) => {};

  return (
    <nav className={`iconsNav ${customClass}`}>
      <Container customClass="backgroundIcon">
        <FaFacebook id="Facebook"></FaFacebook>
        <FaInstagram id="Instragram"></FaInstagram>
        <FaPinterest id="Pinterest"></FaPinterest>
        <FaDiscord id="Discord"></FaDiscord>
        <FaTwitter id="Twitter"></FaTwitter>
      </Container>
      <div className="image"></div>
    </nav>
  );
}

export default NavbarIcons;
