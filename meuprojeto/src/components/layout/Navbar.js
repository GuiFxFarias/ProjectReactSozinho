import { Link } from "react-router-dom";
import Container from "./Container";
import { FiArrowRight } from "react-icons/fi";

import "./NavbarStyle.css";

function Navbar() {

  const eventWeek = {
    name: 'CaçaPokemon'
  }

  return (
    <nav className="navbar">
      <nav>
        <Container customClass="styleNav">
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
        <div className="event">
          <FiArrowRight></FiArrowRight>{" "}
          <div className="hTittle">
            {" "}
            Não fique de fora do proximo evento: <strong>{eventWeek.name}</strong>
          </div>
        </div>
      </nav>
    </nav>
  );
}

export default Navbar;
