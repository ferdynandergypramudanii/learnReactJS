import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MenuResto from "./MenuResto.jsx";
import Header from "./Header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MenuResto />
    </>
  );
}

export default App;
