import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./AppStyle.css";
import "./components/layout/ContainerStyle.css";
import "./components/layout/NavbarIconsStyle.css";

import CriarConta from "./components/pages/CriarConta";
import Principal from "./components/pages/Principal";
import BaixarJogo from "./components/pages/BaixarJogo";
import Torneios from "./components/pages/Torneios";
import NavbarIcons from "./components/layout/NavbarIcons";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Login from "./components/layout/Login";
import Categories from "./components/layout/Categories";
import RecuperarSenha from "./components/pages/RecuperarSenha";
import Main from "./components/layout/Main";
import { useState } from "react";

function App() {
  
  return (
    <Router>
      <NavbarIcons customClass={"margin"}></NavbarIcons>
      <Container customClass="fatherContainer">
        <Container customClass="containder">
          <Container customClass="contMain">
            <Navbar></Navbar>
            <Main>
              <Routes>
                <Route path="/" element={<Principal />}></Route>
                <Route path="/BaixarJogo" element={<BaixarJogo />}></Route>
                <Route path="/Torneios" element={<Torneios />}></Route>
                <Route path="/CriarConta" element={<CriarConta />}></Route>
                <Route
                  path="/RecuperarSenha"
                  element={<RecuperarSenha />}
                ></Route>
              </Routes>
            </Main>
          </Container>
          <div>
            <Login
              customClass="borderLogin"
              register="Criar Conta"
              passForgot="Recuperar Conta"
            ></Login>
            <Categories></Categories>
          </div>
        </Container>
      </Container>
    </Router>
  );
}

export default App;
