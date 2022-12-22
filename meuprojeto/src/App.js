import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CriarConta from "./components/pages/CriarConta";
import Principal from "./components/pages/Principal";
import BaixarJogo from "./components/pages/BaixarJogo";
import Torneios from "./components/pages/Torneios"

import Navbar from "./components/layout/Navbar"
import NavbarIcons from "./components/layout/NavbarIcons";

function App() {
  return (
    <Router>
      
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
