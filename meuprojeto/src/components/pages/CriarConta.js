import "./CriarContaStyle.css";

function CriarConta() {
  return (
    <div>
      <h2>Crie Sua Conta</h2>
      <h4>Inicia sua aventura Pokémon por aqui, criando sua conta</h4>
      <div className="flexAccount">
        <div className="rowRegister">
          <fieldset className="accountNew">
            <ul className="listLabel">
              <li className="item">
                <label htmlFor="nameUser">Nome de Usuário</label>
              </li>
              <li className="item">
                <label htmlFor="email">Email</label>
              </li>
              <li className="item">
                <label htmlFor="passOne">Senha</label>
              </li>
              <li className="item">
                <label htmlFor="passTwo">Repetir Senha</label>
              </li>
            </ul>
          </fieldset>
          <fieldset className="inputsFlex">
            <ul className="listInput">
              <li className="itemInput">
                <input type="text" name="nameUser" id="nameUser" />
              </li>
              <li className="itemInput">
                <input type="email" name="email" id="email" />
              </li>
              <li className="itemInput">
                <input type="password" name="passOne" id="passOne" />
              </li>
              <li className="itemInput">
                <input type="password" name="passTwo" id="passTwo" />
              </li>
            </ul>
          </fieldset>
        </div>
        <h4>
          De o nome ao seu treinador e escolha sua região
        </h4>
        <div className="rowPersonage">
          <fieldset className="personage">
            <ul className="listPersonage">
              <li className="itemPersonage">
                <label htmlFor="namePersonage">Nome</label>
              </li>
              <li className="itemPersonage">
                <label htmlFor="genre">Gênero</label>
              </li>
              <li className="itemPersonage">
                <label htmlFor="initialCity">Cidade inicial</label>
              </li>
              <li className="itemPersonage">
                <label htmlFor="server">Servidor</label>
              </li>
            </ul>
          </fieldset>
          <fieldset className="selectPersonage">
            <ul className="selectList">
              <li className="itemSelect">
                <input type="text" name="namePersonage" id="namePersonage" />
              </li>
              <li className="itemSelect">
                <input type="radio" name="genre" id="genre" />
                <input type="radio" name="genre" id="genre" />
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
      </div>
    </div>
  );
}

export default CriarConta;
