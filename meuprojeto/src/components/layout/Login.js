import Container from "./Container";
import "./LoginStyle.css";
import { GiPokecog } from "react-icons/gi";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import { auth } from "../../FirebaseConfig";
import { Link } from "react-router-dom";
import IMask from "imask";
import { useIMask } from "react-imask";

function Login(props) {
  const [opts, setOpts] = useState({ mask: Number });
  const {
    ref,
    maskRef,
    value,
    setValue,
    unmaskedValue,
    setUnmaskedValue,
    typedValue,
    setTypedValue,
  } = useIMask(opts /* { onAccept, onComplete } */);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  if (loading) {
    return <p>carregando</p>;
  }

  return (
    <Container customClass={`squareLogin ${props.classLogin}`}>
      <form>
        <div className="account">Sua conta</div>
        <div className="divEmail">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="divPass">
          <input
            type="password"
            name="passwords"
            id="passwords"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="loginButton">
          <button type="submit" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
      <div className="buttons">
        <Link to={"/CriarConta"}>
          <button>
            <GiPokecog></GiPokecog> {props.register}
          </button>
        </Link>
        <Link to={"/RecuperarSenha"}>
          <button>
            <GiPokecog></GiPokecog> {props.passForgot}
          </button>
        </Link>
      </div>
    </Container>
  );
}

export default Login;
