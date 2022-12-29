import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./AppStyle.css";
import "./components/layout/ContainerStyle.css";
import "./components/layout/NavbarIconsStyle.css"

import CriarConta from "./components/pages/CriarConta";
import Principal from "./components/pages/Principal";
import BaixarJogo from "./components/pages/BaixarJogo";
import Torneios from "./components/pages/Torneios";
import NavbarIcons from "./components/layout/NavbarIcons";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Login from "./components/layout/Login";

function App() {
  return (
    <Router>
      <NavbarIcons customClass={"margin"}></NavbarIcons>
      <Container customClass="fatherContainer">
        <Container customClass="containder">
          <Container customClass="contMain">
            <Navbar></Navbar>
          </Container>
          <div>
            <Login></Login>
          </div>
        </Container>
      </Container>
      <Routes>
        <Route path="/" element={<Principal />}></Route>
        <Route path="/BaixarJogo" element={<BaixarJogo />}></Route>
        <Route path="/Torneios" element={<Torneios />}></Route>
        <Route path="/CriarConta" element={<CriarConta />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
