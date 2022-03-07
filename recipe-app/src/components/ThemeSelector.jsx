import { useTheme } from "../hooks/useTheme";
import modeIcon from "../assets/brightness_6_black_24dp.svg";
// Styles
import "./ThemeSelector.css";

// Array holding theme colors
const themeColors = ["#42b883", "#35495e", "#b70233"];

export default function ThemeSelector() {
  // Pull out changeColor function, changeMode function and mode property from our useTheme hook using object destructing
  const { changeColor, changeMode, mode } = useTheme();

  // Function to toggle the mode color
  const toggleMode = () => {
    if (mode === "dark") {
      changeMode("light");
    } else if (mode === "light") {
      changeMode("dark");
    }
  };
  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          onClick={toggleMode}
          src={modeIcon}
          alt="Mode Icon"
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%" }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            style={{ background: color }}
            key={color}
            onClick={() => changeColor(color)}
          />
        ))}
      </div>
    </div>
  );
}
