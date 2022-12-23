import "./FundoStyle.css";
import Navbar from "./Navbar";
import NavbarIcons from "./NavbarIcons";

function Fundo() {
  return (
    <div className="background">
      <div className="effect">
        <div className="containder">
          <div className="contColumn">
            <NavbarIcons customClass={'margin'}></NavbarIcons>
            <Navbar></Navbar>
          </div>
          <div className="cont"></div>
        </div>
      </div>
    </div>
  );
}

export default Fundo;
