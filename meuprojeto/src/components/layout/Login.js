import Container from "./Container";
import "./LoginStyle.css";
import { GiPokecog } from "react-icons/gi";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import { auth } from "../../FirebaseConfig";
import { Link } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("logou");
      })
      .catch((e) => {
        console.log("Erro: " + e);
        switch (e.code) {
          case "auth/user-not-found":
            alert(e);
            break;
          case "auth/wrong-password":
            alert(e);
            break;
          case "auth/invalid-email":
            alert(e);
            break;
          case "auth/user-disabled":
            alert(e);
            break;
        }
      });
  }

  return (
    <Container customClass={`squareLogin ${props.classLogin}`}>
      <form>
        <div className="account">Sua conta</div>
        <fieldset className="divEmail">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset className="divPass">
          <input
            type="password"
            name="passwords"
            id="passwords"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <fieldset className="loginButton">
          <button type="submit" onClick={handleLogin}>
            Login
          </button>
        </fieldset>
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
