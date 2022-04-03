import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function QuickQuote() {
  const [value, setValue] = useState();
  return (
    <>
      <form id="details">
        <div id="user-details">
          <div id="name">
            <label>
              First Name
              <span className="required"> *</span>
              <br />
              <input
                type="text"
                name="first-name"
                required="true"
                placeholder="First Name"
              />
            </label>
            <label>
              Last Name
              <span className="required"> *</span>
              <br />
              <input
                type="text"
                name="last-name"
                required="true"
                placeholder="Last Name"
              />
            </label>
          </div>
          <label>
            Email
            <br />
            <input type="email" name="email" placeholder="Email" />
          </label>
          <label>
            Telephone/Mobile
            <br />
            <PhoneInput name="contact" value={value} onChange={setValue} />
          </label>
        </div>
        <div id="currency-details">
          <label>
            From Currency
            <span className="required"> *</span>
            <br />
            <input type="text" name="from-currency" required="true" />
          </label>
          <label>
            To Currency
            <span className="required"> *</span>
            <br />
            <input type="text" name="to-currency" required="true" />
          </label>
          <label>
            Amount
            <span className="required"> *</span>
            <br />
            <input
              type="number"
              step="0.01"
              name="Amount"
              required="true"
              placeholder="25000.00"
            />
          </label>
        </div>
        <div id="submission-button">
          <button type="submit" id="submission">
            GET QUOTE
          </button>
        </div>
      </form>
    </>
  );
}

export default QuickQuote;
