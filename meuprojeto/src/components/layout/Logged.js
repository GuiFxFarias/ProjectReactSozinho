import { signOut } from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import FormLogin from "./FormLogin";
import "./LoggedStyle.css";

function ButtonOut(props) {
  return <button onClick={props.Logout}>{props.children}</button>;
}
function Logged({ user, userEmail }) {
  return (
    <div className="logged">
      <div className="accountLogged" key={user}>
        {userEmail}
      </div>
      <div className="infoLogged">
        <ul className="infoList">
          <li className="itemInfo">1</li>
          <li className="itemInfo">2</li>
          <li className="itemInfo">3</li>
        </ul>

        <ButtonOut Logout={() => console.log("clicou")}>Log out</ButtonOut>
      </div>
    </div>
  );
}

export default Logged;
