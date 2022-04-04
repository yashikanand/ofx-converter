import "./App.css";
import React from "react";
import QuickQuote from "./Components/quickQuote";
import Output from "./Components/quickQuoteOut";

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
