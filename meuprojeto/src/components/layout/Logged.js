import "./LoggedStyle.css";

function Logged(props) {
  return (
    <div className="logged">
      <div className="accountLogged" key={props.user}>
        {props.userEmail}
      </div>
      <div className="infoLogged">
        <ul className="infoList">
            <li className="itemInfo">1</li>
            <li className="itemInfo">2</li>
            <li className="itemInfo">3</li>
        </ul>
        <button>Log out</button>
      </div>
    </div>
  );
}

export default Logged;
