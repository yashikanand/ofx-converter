import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import DataAccess from "./dataAccess";

function QuickQuote() {
  const [value, setValue] = useState();
  const [senderCurrency, setSenderCurrency] = useState("");
  const [receiverCurrency, setReceiverCurrency] = useState("");
  const [senderAmount, setSenderAmount] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setValue();
    setSenderCurrency("");
    setReceiverCurrency("");
    setSenderAmount("");
  };
  return (
    <>
      <DataAccess />
      <form id="details" onSubmit={submit}>
        <div id="user-details">
          <div id="name">
            <label>
              First Name
              <span className="required"> *</span>
              <br />
              <input
                type="text"
                name="first-name"
                required
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
                required
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
          <label htmlFor="from-currency">
            From Currency
            <span className="required"> *</span>
            <br />
            <select
              value={senderCurrency}
              onChange={(e) => setSenderCurrency(e.target.value)}
              id="from-currency"
              name="from-currency"
              required
            >
              <option value="">Please select</option>
              <option value="USD">United States Dollar(USD)</option>
              <option value="AUD">Australian Dollar(AUD)</option>
            </select>
          </label>
          <label htmlFor="to-currency">
            To Currency
            <span className="required"> *</span>
            <br />
            <select
              value={receiverCurrency}
              onChange={(e) => setReceiverCurrency(e.target.value)}
              id="to-currency"
              name="to-currency"
              required
            >
              <option value="">Please select</option>
              <option value="USD">United States Dollar(USD)</option>
              <option value="AUD">Australian Dollar(AUD)</option>
            </select>
          </label>
          <label>
            Amount
            <span className="required"> *</span>
            <br />
            <input
              value={senderAmount}
              onChange={(e) => setSenderAmount(e.target.value)}
              type="number"
              step="0.01"
              name="Amount"
              required
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
