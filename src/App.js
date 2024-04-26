import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import "../src/css/palette.css";
import "../src/css/common.css";

import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
