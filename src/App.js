import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.js";
import Home from "./pages/home/home.jsx";
import Create from "./pages/create/create.jsx";
import Search from "./pages/search/serach.jsx";
import Recipe from "./pages/recipe/recipe.jsx";
import "./App.css";
import ThemeSelector from "./components/ThemeSelector.js";
import { useTheme } from "./hooks/useTheme.js";

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <HashRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
