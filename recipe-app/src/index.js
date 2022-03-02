import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Import our ThemeProvider from our ThemeContext
import { ThemeProvider } from "./context/ThemeContext";
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
