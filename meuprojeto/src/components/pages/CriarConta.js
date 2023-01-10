import "./CriarContaStyle.css";
import { useState } from "react";
import { BsFillForwardFill } from "react-icons/bs";

import { auth } from "../../FirebaseConfig";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import CreateAccount from "../layout/CreateAccount";

function CriarConta() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function handleRegister(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
    if (loading) {
      console.log("cadastrado");
      return (
        <div>
          <p>Carregando...</p>
          <p>Registrou</p>
        </div>
      );
    }
  }

  if (error) {
    return console.log("Error: " + error);
  }

  return (
    <div>
      <h2>Crie Sua Conta</h2>
      <h4>Inicia sua aventura Pokémon por aqui, criando sua conta</h4>
      <div className="flexAccount">
        <form className="displayOn">
          <div className="rowRegister">
            <fieldset className="accountNew">
              <ul className="listLabel">
                <li className="item">
                  <label htmlFor="nameUser">
                    Nome de Usuário <BsFillForwardFill />
                  </label>
                </li>
                <li className="item">
                  <label htmlFor="email">
                    Email <BsFillForwardFill />
                  </label>
                </li>
                <li className="item">
                  <label htmlFor="passOne">
                    Senha <BsFillForwardFill />
                  </label>
                </li>
                <li className="item">
                  <label htmlFor="passTwo">
                    Repetir Senha <BsFillForwardFill />
                  </label>
                </li>
              </ul>
            </fieldset>
            <fieldset className="inputsFlex">
              <ul className="listInput">
                <li className="itemInput">
                  <input type="text" name="nameUser" id="nameUser" />
                </li>
                <li className="itemInput">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </li>
                <li className="itemInput">
                  <input
                    type="password"
                    name="passOne"
                    id="passOne"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </li>
                <li className="itemInput">
                  <input
                    type="password"
                    name="passTwo"
                    id="passTwo"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </li>
              </ul>
            </fieldset>
          </div>
          <h4>De o nome ao seu treinador e escolha sua região</h4>
          <div className="rowPersonage">
            <fieldset className="personage">
              <ul className="listPersonage">
                <li className="itemPersonage">
                  <label htmlFor="namePersonage">
                    Nome <BsFillForwardFill />
                  </label>
                </li>
                <li className="itemPersonage">
                  <label htmlFor="genre">
                    Gênero <BsFillForwardFill />
                  </label>
                </li>
                <li className="itemPersonage">
                  <label htmlFor="initialCity">
                    Cidade inicial <BsFillForwardFill />
                  </label>
                </li>
                <li className="itemPersonage">
                  <label htmlFor="server">
                    Servidor <BsFillForwardFill />
                  </label>
                </li>
              </ul>
            </fieldset>
            <fieldset className="selectPersonage">
              <ul className="selectList">
                <li className="itemSelect">
                  <input type="text" name="namePersonage" id="namePersonage" />
                </li>
                <li className="itemSelect">
                  <input
                    type="radio"
                    name="genre"
                    id="genreF"
                    className="radio"
                  />
                  <input
                    type="radio"
                    name="genre"
                    id="genreM"
                    className="radio"
                  />
                  <label htmlFor="genreF">Feminino</label>
                  <label htmlFor="genreM">Masculino</label>
                </li>
                <li className="itemSelect">
                  <select name="initialCity" id="initialCity"></select>
                </li>
                <li className="itemSelect">
                  <select name="server" id="server"></select>
                </li>
              </ul>
            </fieldset>
          </div>
          <button onClick={handleRegister}>Registrar</button>
        </form>
      </div>
      <CreateAccount inputClass="displayMobile" />
    </div>
  );
}

export default CriarConta;
