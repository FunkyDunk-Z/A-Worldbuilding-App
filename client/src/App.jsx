import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NotFound from "./components/utils/NotFound";

import Home from "./pages/Home";
import Codex from "./pages/codex/Codex";

import Bestiary from "./pages/codex/bestiary/bestiary";
import Characters from "./pages/codex/characters/Characters";
import Factions from "./pages/codex/factions/Factions";
import Items from "./pages/codex/items/Items";
import Locations from "./pages/codex/locations/Locations";
import LoreAndHistory from "./pages/codex/lore-and-history/LoreAndHistory";
import Nations from "./pages/codex/nations/Nations";
import Realms from "./pages/codex/realms/Realms";
import Species from "./pages/codex/species/Species";

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
              <Route path="characters" element={<Characters />} />
              <Route path="factions" element={<Factions />} />
              <Route path="items" element={<Items />} />
              <Route path="locations" element={<Locations />} />
              <Route path="lore-and-history" element={<LoreAndHistory />} />
              <Route path="nations" element={<Nations />} />
              <Route path="realms" element={<Realms />} />
              <Route path="species" element={<Species />} />
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
