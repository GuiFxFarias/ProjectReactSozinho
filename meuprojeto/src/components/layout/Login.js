import Container from "./Container";
import "./LoginStyle.css";
import { GiPokecog } from "react-icons/gi";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSignOut } from "react-firebase-hooks/auth";
import { useState } from "react";
import { auth } from "../../FirebaseConfig";
import { Link } from "react-router-dom";
import { async } from "@firebase/util";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signOut, loadingOut, errorOut] = useSignOut(auth);

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  const singOutLogin = async () => {
    const success = await signOut();
    if (success) {
      alert("You are sign out");
    }
  };

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
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
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset className="divPass">
          <input
            type="password"
            name="passwords"
            id="passwords"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <fieldset className="loginButton">
          <button onClick={handleLogin}>Login</button>
          <button onClick={singOutLogin}>Log out</button>
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
