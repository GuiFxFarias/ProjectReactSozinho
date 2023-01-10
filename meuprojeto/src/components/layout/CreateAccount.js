const labels = [
  {
    id: 0,
    name: "Nome de usuário",
  },
  {
    id: 1,
    name: "Email",
  },
];

function CreateAccount(props) {
  const listItems = labels.map((person) => (
    <li>
      <b>{person.name}:</b>
    </li>
  ));

  return <ul className={`${props.inputClass}`}>{listItems}</ul>;
}

export default CreateAccount;
