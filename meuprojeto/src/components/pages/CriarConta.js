import "./CriarContaStyle.css";
import { auth } from "../../FirebaseConfig";
import { useState } from "react";
import { BsFillForwardFill } from "react-icons/bs";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

function CriarConta() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h2>Crie Sua Conta</h2>
      <h4>Inicia sua aventura Pokémon por aqui, criando sua conta</h4>
      <div className="flexAccount">
        <form>
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
                    onChange={(e) => setRegisterEmail(e.target.value)}
                  />
                </li>
                <li className="itemInput">
                  <input
                    type="password"
                    name="passOne"
                    id="passOne"
                    onChange={(e) => setRegisterPassword(e.target.value)}
                  />
                </li>
                <li className="itemInput">
                  <input
                    type="password"
                    name="passTwo"
                    id="passTwo"
                    onChange={(e) => setRegisterPassword(e.target.value)}
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
          <button onClick={register}>Registrar</button>
        </form>
      </div>
    </div>
  );
}

export default CriarConta;
