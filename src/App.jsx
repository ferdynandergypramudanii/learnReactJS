import { useState, createContext, useContext } from "react";
import "./App.css";
import MenuResto from "./MenuResto.jsx";
import Header from "./Header.jsx";
import UserStatus from "./UserStatus.jsx";
import ProductListLoop from "./ProductListLoop.jsx";
import Button from "./Button.jsx";
import ThumbsUpAndDown from "./ThumbsUpAndDown.jsx";
import ThemeSwitcher from "./ThemeSwitcher.jsx";

// createContext harus dipisah dengan komponen lain dan di export
export const ThemeContext = createContext();

function App() {
  const products = [
    { id: 1, name: "Botol minum", price: 20000 },
    { id: 2, name: "Piring", price: 15000 },
    { id: 3, name: "Mangkok", price: 15000 },
    { id: 4, name: "Gelas", price: 10000 },
    { id: 5, name: "Panci", price: 30000 },
  ];

  // global state
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <MenuResto />
      <UserStatus name="Ergy" />
      <ProductListLoop products={products} />
      <Button />
      <ThumbsUpAndDown />
      <ThemeSwitcher />
    </ThemeContext.Provider>
  );
}

export default App;
