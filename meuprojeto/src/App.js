import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contato from "./components/pages/Contato";

import Home from "./components/pages/Home";
import Sobre from "./components/pages/Sobre";
import Navbar from "./components/layout/Navbar"

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Sobre" element={<Sobre />}></Route>
        <Route path="/Contato" element={<Contato />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
