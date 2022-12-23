import Container from "./Container";
import "./LoginStyle.css";
import {GiPokecog} from "react-icons/gi"

function Login() {
  return (
    <Container customClass="squareLogin">
      <form>
        <div className="divEmail">
          <label htmlFor="email">E-mail: </label>
          <input type="email" name="email" placeholder="E-mail" />
        </div>
        <div className="divPass">
          <label htmlFor="passwords">Password: </label>
          <input
            type="password"
            name="passwords"
            id="passwords"
            placeholder="Password"
          />
        </div>
        <div className="buttons">
          <button type="submit"><GiPokecog></GiPokecog> Criar Conta</button>
          <button type="submit">Recuperar Conta</button>
        </div>
      </form>
    </Container>
  );
}

export default Login;
