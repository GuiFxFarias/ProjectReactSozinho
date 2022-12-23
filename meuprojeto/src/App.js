import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CriarConta from "./components/pages/CriarConta";
import Principal from "./components/pages/Principal";
import BaixarJogo from "./components/pages/BaixarJogo";
import Torneios from "./components/pages/Torneios"

import Fundo from "./components/layout/Fundo";

function App() {
  return (
    <Router>
      <Fundo></Fundo>
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
