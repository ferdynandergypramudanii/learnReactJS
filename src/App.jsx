import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MenuResto from "./MenuResto.jsx";
import Header from "./Header.jsx";
import UserStatus from "./UserStatus.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MenuResto />
      <UserStatus />
    </>
  );
}

export default App;
