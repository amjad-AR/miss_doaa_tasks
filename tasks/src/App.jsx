import { useState } from "react";
import "./index.css";
import Budget from "./Family_Budget/Budget.jsx";
import Products from "./products/Products.jsx";
import Rejester from "./Rejester/Rejester.jsx";

function App() {
  return (
    <>
      <Budget />
      <Products />
      <Rejester />
    </>
  );
}

export default App;
