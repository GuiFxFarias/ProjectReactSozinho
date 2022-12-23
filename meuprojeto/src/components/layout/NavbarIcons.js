import "./NavbarIconsStyle.css";
import Container from "./Container";
import {
  FaFacebook,
  FaInstagram,
  FaDiscord,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

//GiPokecog

function NavbarIcons({ customClass }) {
  return (
    <nav className={`iconsNav ${customClass}`}>
      <Container customClass="backgroundIcon">
        <FaFacebook></FaFacebook>
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
