/* Importing the required libraries for the functionality of the code */
import "./App.css";
import React from "react";
import QuickQuote from "./components/quickQuote";

/* Function to display the header of the webpage.
  Displays the heading and the divider of the body and head. */
function Heading() {
  return (
    <div>
      <h1 id="heading">Quick Quote</h1>
      <hr id="divider" />
    </div>
  );
}

/* Function to call the homepage.
  Displays Heading and the Quick quote form */
function App() {
  return (
    <>
      <Heading />
      <QuickQuote />
    </>
  );
}

/* Exporting the function to use in another script */
export default App;
