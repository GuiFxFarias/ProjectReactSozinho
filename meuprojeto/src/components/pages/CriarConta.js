import CompCriaConta from "../layout/CompCriaConta";
import CreateAccount from "../layout/CreateAccount";


function CriarConta() {
  return (
    <div>
      <h2>Crie Sua Conta</h2>
      <h4>Inicia sua aventura Pokémon por aqui, criando sua conta</h4>
      <CompCriaConta />
      <CreateAccount inputClass="displayMobile" />
    </div>
  );
}

export default CriarConta;
