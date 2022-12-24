import Container from "./Container";
import "./LoginStyle.css";
import { GiPokecog } from "react-icons/gi";

function Login(props) {
  return (
    <Container customClass={`squareLogin, ${props.classLogin}`}>
      <form>
        <div className="account">Sua conta</div>
        <div className="divEmail">
          <input type="email" name="email" placeholder="E-mail" />
        </div>
        <div className="divPass">
          <input
            type="password"
            name="passwords"
            id="passwords"
            placeholder="Password"
            required
          />
        </div>
        <div className="loginButton">
          <button type="submit">
            Login
          </button>
        </div>
        <div className="buttons">
          <button type="submit">
            <GiPokecog></GiPokecog> Criar Conta
          </button>
          <button type="submit">
            <GiPokecog></GiPokecog> Recuperar Conta
          </button>
        </div>
      </form>
    </Container>
  );
}

export default Login;
