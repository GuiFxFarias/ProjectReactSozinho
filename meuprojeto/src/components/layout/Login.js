import Container from "./Container";
import "./LoginStyle.css";
import { GiPokecog } from "react-icons/gi";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../../FirebaseConfig";
import { Link } from "react-router-dom";

function Login(props) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <Container customClass={`squareLogin ${props.classLogin}`}>
      <form>
        <div className="account">Sua conta</div>
        <fieldset className="divEmail">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </fieldset>
        <fieldset className="divPass">
          <input
            type="password"
            name="passwords"
            id="passwords"
            placeholder="Password"
            required
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </fieldset>
        <fieldset className="loginButton">
          <button onClick={login}>Login</button>
          <button onClick={logout}>Log out</button>
          {user?.email}
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
