import { useTheme } from "../hooks/useTheme";
// Styles
import "./ThemeSelector.css";

// Array holding theme colors
const themeColors = ["#42b883", "#35495e", "#b70233"];

export default function ThemeSelector() {
  // Pull out changeColor function from our useTheme hook using object destructing
  const { changeColor } = useTheme();
  return (
    <div className="theme-selector">
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
