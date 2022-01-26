import { Link } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

// styles
import "./navbar.css";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const color = useContext(ThemeContext);

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Shahmar's Kitchen</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
