import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import People from "./components/People";
import Planets from "./components/Planets";
import Home from "./components/Home";
import Vehicles from "./components/Vehicles";
import Films from "./components/Films";
import Starships from "./components/Starships";
import Species from "./components/Species";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/films" element={<Films />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/species" element={<Species />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
