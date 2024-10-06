// useContext, createContext, global state
// createContext harus di export[App] dan diimport di sini

import { useContext, createContext, useState } from "react";
import { ThemeContext } from "./App.jsx";

// Create context ada di App.jsx [parent]

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>Theme Switcher</h3>
      <p>Current theme: {theme}</p>
      <div style={{ display: "flex" }}>
        <button onClick={() => setTheme("light")}>Set Light Mode</button>
        <button style={{ marginLeft: "30px" }} onClick={() => setTheme("dark")}>
          Set Dark Mode
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
