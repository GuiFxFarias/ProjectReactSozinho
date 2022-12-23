import "./FundoStyle.css";
import Login from "./Login";
import Navbar from "./Navbar";
import NavbarIcons from "./NavbarIcons";

function Fundo() {
  return (
    <div className="background">
      <div className="effect">
        <NavbarIcons customClass={"margin"}></NavbarIcons>
        <div className="container01">
          <div className="containder">
            <div className="contColumn">
              <Navbar></Navbar>
            </div>
            <div className="cont">
              <Login></Login>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fundo;
