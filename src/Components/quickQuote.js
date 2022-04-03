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
              <br />
              <input type="text" name="first-name" />
            </label>
            <label>
              Last Name
              <br />
              <input type="text" name="last-name" />
            </label>
          </div>
          <label>
            Email
            <br />
            <input type="email" name="email" />
          </label>
          <label>
            Telephone/Mobile
            <br />
            <input type="tel" name="contact" />
          </label>
        </div>
        <div id="currency-details">
          <label>
            From Currency
            <br />
            <input type="text" name="from-currency" />
          </label>
          <label>
            To Currency
            <br />
            <input type="text" name="to-currency" />
          </label>
          <label>
            Amount
            <br />
            <input type="number" name="Amount" />
          </label>
        </div>
        <div id="submission-button">
          <button id="submission" onClick={() => setStatus("Start New Quote")}>
            {status}
          </button>
        </div>
      </form>
    </>
  );
}

export default QuickQuote;
