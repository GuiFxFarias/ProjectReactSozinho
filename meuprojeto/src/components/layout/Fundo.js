import Categories from "./Categories";
import "./FundoStyle.css";
import Login from "./Login";
import Main from "./Main";
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
              <Main></Main>
            </div>
            <div className="flexColumn">
              <div className="cont">
                <Login></Login>
              </div>
              <div className="cont cont01">
                <Categories></Categories>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fundo;
