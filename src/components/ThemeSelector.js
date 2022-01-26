import "./ThemeSelector.css";
import modeIcon from "../assets/modeIcon.svg";
import { useTheme } from "../hooks/useTheme";

const themeColors = ["#1A1A40", "#BF8B67", "#950101"];

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  console.log(mode);
  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          alt="light-icon"
          src={modeIcon}
          onClick={toggleMode}
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>

      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
