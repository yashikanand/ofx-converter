import "./App.css";
import React from "react";
import QuickQuote from "./Components/quickQuote";

function Heading() {
  return (
    <div>
      <h1 id="heading">Quick Quote</h1>
      <hr id="divider" />
    </div>
  );
}

function App() {
  return (
    <>
      <Heading />
      <QuickQuote />
    </>
  );
}

export default App;
