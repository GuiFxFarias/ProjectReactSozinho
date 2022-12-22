import { Link } from "react-router-dom";
import Container from "./Container";
import "./NavbarStyle.css"

function Navbar() {
  return (
    <nav className="navbar">
      <Container>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/Sobre"}>Sobre</Link>
          </li>
          <li>
            <Link to={"/Contato"}>Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
