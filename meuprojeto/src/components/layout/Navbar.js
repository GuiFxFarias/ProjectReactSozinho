import { Link } from "react-router-dom";
import Container from "./Container";

import "./NavbarStyle.css"

function Navbar() {
  return (
    <nav className="navbar">
      <Container>
        <ul>
          <li>
            <Link to={"/"}>Principal</Link>
          </li>
          <li>
            <Link to={"/CriarConta"}>Criar Conta</Link>
          </li>
          <li>
            <Link to={"/BaixarJogo"}>Baixar Jogo</Link>
          </li>
          <li>
            <Link to={"/Torneios"}>Torneios</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
