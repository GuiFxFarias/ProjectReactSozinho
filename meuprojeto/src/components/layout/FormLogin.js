import Container from "./Container";
import "./FormLoginStyle.css";
import { GiPokecog } from "react-icons/gi";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import "../pages/Principal";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../FirebaseConfig";
import Logged from "./Logged";

function FormLogin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  function CurrentUser() {
    const [user, loading, error] = useAuthState(auth);

    console.log(user);
  }

  if (user) {
    console.log(user.user.email);
    console.log(user.user.displayName);
    return <Logged userEmail={user.user.email} key={user} />;
  }
  if (error) {
    console.log("Error: " + error);
  }

  return (
    <Container customClass={`squareLogin ${props.classLogin}`}>
      <form>
        <div className="account">Sua conta</div>
        <fieldset
          className="divEmail"
          data-tooltip="Email ou senha incorreto"
          
        >
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            value={email}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <fieldset className="loginButton">
          <button onClick={handleSignIn}>Login</button>
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

export default FormLogin;
