import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NotFound from "./components/utils/NotFound";

import Home from "./pages/Home";
import Codex from "./pages/codex/Codex";

import Bestiary from "./pages/codex/bestiary/bestiary";

function App() {
  return (
    <>
      <div className="container main">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/codex">
              <Route index element={<Codex />} />
              <Route path="bestiary" element={<Bestiary />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
