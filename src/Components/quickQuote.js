/* Importing the required libraries for the functionality of the code */
import React, { useState } from "react";
import QuickQuoteOutput from "./quickQuoteOutput";
import QuickQuoteForm from "./quickQuoteForm";

/*
An async function promise to retreive the conversion rate from the API server and returning the required value
First it fetches all the data according to the user entered value in the form.
Then the response is stored and the required field from the dataset received is returned. 
*/
async function getConversionRate(fromCurrency, toCurrency, amount) {
  const link = `https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${fromCurrency}/${toCurrency}/${amount}?format=json`;
  const response = await fetch(link);
  const data = await response.json();
  return data.CustomerRate;
}

/* 
A function to handle the useState of the form which if the fields required for the Quote are entered,
then shows the output screen and if the data is not entered then shows the form.
*/
function QuickQuote() {
  const [customerRate, setCustomerRate] = useState(0);
  const [contactNumber, setContactNumber] = useState();
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");

  /* An async promise function to prevent the page from reloading
   Retreives the conversion rate from the API and stores it in the variable. */
  const getQuote = async (e) => {
    e.preventDefault();
    const customerRate = await getConversionRate(
      fromCurrency,
      toCurrency,
      amount
    );
    setCustomerRate(customerRate);
  };

  /* A function to handle the state when the new quote button is clicked.
    Sets all the values to the initial state. */
  const newQuote = (e) => {
    e.preventDefault();

    setCustomerRate(0);
    setContactNumber();
    setFromCurrency("");
    setToCurrency("");
    setAmount("");
  };

  /* 
  Tertiary operation checking if the customerRate is retreived,
  then Output is given or else the form is shown  */
  return (
    <>
      {customerRate && amount ? (
        <QuickQuoteOutput
          customerRate={customerRate}
          amount={amount}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          convertedAmount={amount * customerRate}
          newQuote={newQuote}
        />
      ) : (
        <QuickQuoteForm
          amount={amount}
          setAmount={setAmount}
          fromCurrency={fromCurrency}
          setFromCurrency={setFromCurrency}
          toCurrency={toCurrency}
          setToCurrency={setToCurrency}
          contactNumber={contactNumber}
          setContactNumber={setContactNumber}
          getQuote={getQuote}
        />
      )}
    </>
  );
}

/* Exporting the function to use in another script */
export default QuickQuote;
