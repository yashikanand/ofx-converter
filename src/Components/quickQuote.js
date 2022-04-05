import React, { useState } from "react";
import QuickQuoteOutput from "./quickQuoteOutput";
import QuickQuoteForm from "./quickQuoteForm";

async function getConversionRate(fromCurrency, toCurrency, amount) {
  const link = `https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${fromCurrency}/${toCurrency}/${amount}?format=json`;

  const response = await fetch(link);
  const data = await response.json();
  return data.CustomerRate;
}

function QuickQuote() {
  const [customerRate, setCustomerRate] = useState(0);
  const [contactNumber, setContactNumber] = useState();
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");

  const getQuote = async (e) => {
    e.preventDefault();
    const customerRate = await getConversionRate(
      fromCurrency,
      toCurrency,
      amount
    );
    setCustomerRate(customerRate);
  };

  const newQuote = (e) => {
    e.preventDefault();

    setCustomerRate(0);
    setContactNumber();
    setFromCurrency("");
    setToCurrency("");
    setAmount("");
  };

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

export default QuickQuote;
