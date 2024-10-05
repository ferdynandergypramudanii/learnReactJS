import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MenuResto from "./MenuResto.jsx";
import Header from "./Header.jsx";
import UserStatus from "./UserStatus.jsx";
import ProductListLoop from "./ProductListLoop.jsx";
import Button from "./Button.jsx";

function App() {
  const [count, setCount] = useState(0);

  const products = [
    { id: 1, name: "Botol minum", price: 20000 },
    { id: 2, name: "Piring", price: 15000 },
    { id: 3, name: "Mangkok", price: 15000 },
    { id: 4, name: "Gelas", price: 10000 },
    { id: 5, name: "Panci", price: 30000 },
  ];

  return (
    <>
      <Header />
      <MenuResto />
      <UserStatus name="Ergy" />
      <ProductListLoop products={products} />
      <Button />
    </>
  );
}

export default App;
