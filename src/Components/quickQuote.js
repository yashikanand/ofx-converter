import React, { useState } from "react";

function QuickQuote() {
  const [status, setStatus] = useState("Get Quote");
  return (
    <>
      <form id="details">
        <div id="user-details">
          <div id="name">
            <label>
              First Name
              <input type="text" name="first-name" />
            </label>
            <label>
              Last Name
              <input type="text" name="last-name" />
            </label>
          </div>
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label>
            Telephone/Mobile
            <input type="number" name="contact" />
          </label>
        </div>
        <div id="currency-details">
          <label>
            From Currency
            <input type="number" name="from-currency" />
          </label>
          <label>
            To Currency
            <input type="number" name="to-currency" />
          </label>
          <label>
            Amount
            <input type="number" name="Amount" />
          </label>
        </div>
      </form>
      <button onClick={() => setStatus("Start New Quote")}>{status}</button>
    </>
  );
}

export default QuickQuote;
