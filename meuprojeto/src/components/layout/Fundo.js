import "./FundoStyle.css";
import Navbar from "./Navbar";
import NavbarIcons from "./NavbarIcons";

function Fundo() {
  return (
    <div className="background">
      <div className="effect">
        <NavbarIcons customClass={'margin'}></NavbarIcons>
        <Navbar></Navbar>
      </div>
    </div>
  );
}

export default Fundo;
