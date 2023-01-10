import { BsFillForwardFill } from "react-icons/bs";

const labels = [{ name: "Nome de Usuário" }, { email: "Selecione seu email" }];

labels.forEach((element) => {
  return element;
});

function ListItensMobile() {}

function CreateAccount(props) {
  return (
    <div className={`${props.inputClass}`}>
      <form>
        <fieldset>
          <ul className="mobileList">
            <ListItensMobile />
          </ul>
        </fieldset>
      </form>
    </div>
  );
}

export default CreateAccount;
